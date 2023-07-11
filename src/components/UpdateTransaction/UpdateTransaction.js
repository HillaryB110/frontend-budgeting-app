import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateTransaction() {
  const { id } = useParams();
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransactionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchTransactionData() {
    try {
      const response = await axios.get(
        `https://hils-budgeting-app-backend.onrender.com/transactions/${id}`
      );
      const transactionData = response.data;
      setItemName(transactionData.itemName);
      setAmount(transactionData.amount);
      setDate(transactionData.date);
      setFrom(transactionData.from);
      setCategory(transactionData.category);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const updatedTransaction = {
      itemName,
      amount,
      date,
      from,
      category,
    };

    try {
      await axios.put(
        `https://hils-budgeting-app-backend.onrender.com/transactions/${id}`,
        updatedTransaction
      );

      navigate(`/transactions/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Update Transaction</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="itemName">Item Name</label>
              <input
                type="text"
                id="itemName"
                className="form-control"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input
                type="text"
                id="from"
                className="form-control"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTransaction;
