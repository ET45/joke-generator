// src/index.js (or src/main.jsx)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./JokeGenerator";

// ⬇️ Import the global styles
import "./styles/AppStyles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
