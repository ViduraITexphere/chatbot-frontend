import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./Chatbot";
import "./App.css";
import AddModels from "./AddModels";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chatbot />} />
        <Route path="/add-models" element={<AddModels />} />
      </Routes>
    </Router>
  );
}

export default App;
