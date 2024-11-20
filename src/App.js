import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavPage from './NavPage/Navpage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavPage />
    </Router>
      <h2>meow</h2>
    </div>
  );
}

export default App;
