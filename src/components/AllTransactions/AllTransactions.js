import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllTransactions() {
  let navigate = useNavigate();
  useEffect(() => {
    fetchTransactionsData();
  }, []);

  const [transactionsData, setTransactionsData] = useState([]);

  async function fetchTransactionsData() {
    try {
      let response = await axios.get(
        `https://hils-budgeting-app-backend.onrender.com/transactions`
      );

      setTransactionsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function singleTransactionSelect(id) {
    navigate(`/transactions/${id}`);
  }

  function getTotalBalance() {
    let balanceArray = [];
    transactionsData.forEach(({ amount }) => balanceArray.push(Number(amount)));
    let sum = 0;

    for (let i = 0; i < balanceArray.length; i++) {
      sum += balanceArray[i];
    }

    return sum;
  }

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h3>Total Account Balance: ${getTotalBalance()}</h3>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Item Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map(({ id, itemName, amount, date }) => (
              <tr
                key={id}
                onClick={() => singleTransactionSelect(id)}
                
              >
                <td>{date}</td>
                <td>{itemName}</td>
                <td>${amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTransactions;
