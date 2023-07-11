import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

function CreateTransaction() {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const id = v4();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (itemName.trim() === "" || amount.trim() === "" || date.trim() === "" || from.trim() === "" || category.trim() === "") {
      setError("All fields are required");
      return;
    }

    const newTransaction = {
      id,
      itemName,
      amount,
      date,
      from,
      category,
    };

    try {
      const response = await axios.post(
        "https://hils-budgeting-app-backend.onrender.com/transactions",
        newTransaction
      );

      console.log(response.data);

      navigate("/transactions");
    } catch (error) {
      console.error(error);
    }
  };

  const amountClass = Number(amount) >= 0 ? "text-success" : "text-danger";

  return (
    <div className="container mt-5">
      <div className="card bg-light-blue">
        <div className="card-body">
          <h2 className="card-title">Create Transaction</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="itemName">Item Name</label>
              <input
                type="text"
                className="form-control"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                className={`form-control ${amountClass}`}
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input
                type="text"
                className="form-control"
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTransaction;
