// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Warehouse from "./components/Warehouse";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper background-sky">
      <Router>
        <div className="flex h-100">
          <div className="menu">
            <Navbar />
          </div>
          <div className="data">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Warehouse" element={<Warehouse />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
