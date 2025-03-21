import React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import "../styles/JokeDialog.css";

export const JokeDialog = ({ joke, setShowDialog }) => {
  return (
    <Dialog className="joke-dialog">
      <p>A JOKE</p>
      <p className="joke-text">{joke}</p>
      <Button onClick={() => setShowDialog(false)} primary className="close-button">Close</Button>
    </Dialog>
  );
};
