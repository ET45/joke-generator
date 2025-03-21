import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Tooltip } from "@progress/kendo-react-tooltip";
import "../styles/JokeButton.css";

export const JokeButton = ({ handleFetchJoke, loading }) => {
  return (
    <Tooltip anchorElement="target" position="top">
      <Button onClick={handleFetchJoke} disabled={loading} primary className="joke-button">
        {loading ? "Generating..." : "Get Joke"}
      </Button>
    </Tooltip>
  );
};