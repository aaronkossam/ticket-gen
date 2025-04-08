import { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import Ticket from "./components/Ticket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
