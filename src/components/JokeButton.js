import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Tooltip } from "@progress/kendo-react-tooltip";

export const JokeButton = ({ handleFetchJoke, loading }) => {
  return (
    <Tooltip anchorElement="target" position="top">
      <Button onClick={handleFetchJoke} disabled={loading} primary style={{ padding: "10px 20px", fontSize: "16px" }}>
        {loading ? "Generating..." : "Get Joke"}
      </Button>
    </Tooltip>
  );
};
