import React from "react";
import "../styles/JokeDialog.css";

export const JokeDialog = ({ joke, setShowDialog }) => {
  return (
    <div className="custom-joke-dialog">
      <div className="joke-bubble">
        <p className="joke-text">🗨️ {joke}</p>
        <button onClick={() => setShowDialog(false)} className="close-button">
  Close
</button>

      </div>
    </div>
  );
};
