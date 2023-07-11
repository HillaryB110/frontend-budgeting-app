import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import AllTransactions from "./components/AllTransactions/AllTransactions";
import SingleTransaction from "./components/SingleTransaction/SingleTransaction";
import CreateTransaction from "./components/CreateTransaction/CreateTransaction";
import UpdateTransaction from "./components/UpdateTransaction/UpdateTransaction";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/transactions" element={<AllTransactions />}></Route>
          <Route
            path="/transactions/:id"
            element={<SingleTransaction />}
          ></Route>
          <Route
            path="/transactions/new"
            element={<CreateTransaction />}
          ></Route>
          <Route
            path="/transactions/:id/update"
            element={<UpdateTransaction />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
