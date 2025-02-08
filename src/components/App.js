import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdetail from "./Userdetail";
import Users from "./Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Router>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes>
            <Route path="/" element={<Userdetail users={users} />} />
            <Route path="/users/:id" element={<Users users={users} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;