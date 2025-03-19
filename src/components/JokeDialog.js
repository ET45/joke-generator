import React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";

export const JokeDialog = ({ joke, setShowDialog }) => {
  return (
    <Dialog>
      <p>A JOKE</p>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{joke}</p>
      <Button onClick={() => setShowDialog(false)} primary style={{ marginTop: "10px" }}>Close</Button>
    </Dialog>
  );
};
