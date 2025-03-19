import React from "react";
import { Input } from "@progress/kendo-react-inputs";

export const JokeInput = ({ keyword, setKeyword }) => {
  return (
    <Input
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Enter a topic (optional)"
      style={{ marginBottom: "15px", background: "#333", color: "white", borderRadius: "5px", padding: "10px" }}
    />
  );
};
