import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function SingleTransaction() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransactionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchTransactionData() {
    try {
      let response = await axios.get(
        `https://hils-budgeting-app-backend.onrender.com/transactions/${id}`
      );

      setTransaction(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTransaction() {
    try {
      await axios.delete(
        `https://hils-budgeting-app-backend.onrender.com/transactions/${id}`
      );
      navigate("/transactions");
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTransaction() {
    navigate(`/transactions/${id}/update`);
  }

  if (!transaction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card border-info bg-white">
        <div className="card-body">
          <h2 className="card-title">{transaction.itemName}</h2>
          <p className="card-text">Amount: ${transaction.amount}</p>
          <p className="card-text">Date: {transaction.date}</p>
          <p className="card-text">From: {transaction.from}</p>
          <p className="card-text">Category: {transaction.category}</p>
          <button className="btn btn-danger mr-2" onClick={deleteTransaction}>
            Delete
          </button>
          <button className="btn btn-warning" onClick={updateTransaction}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleTransaction;
