import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import "../styles/JokeInput.css";

export const JokeInput = ({ keyword, setKeyword }) => {
  return (
    <Input
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Enter a topic (optional)"
      className="joke-input"
    />
  );
};
