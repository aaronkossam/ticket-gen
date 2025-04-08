import React from "react";
import { useLocation } from "react-router-dom";

function Ticket() {
  const location = useLocation();
  const form = location.state || {}; // Default to empty object if no state

  return (
    <div>
      <h1>Your Submitted Information</h1>
      <p>
        <strong>Name:</strong> {form.name || "Not provided"}
      </p>
      <p>
        <strong>Email:</strong> {form.email || "Not provided"}
      </p>
      <p>
        <strong>Message:</strong> {form.github || "Not provided"}
      </p>
    </div>
  );
}

export default Ticket;
