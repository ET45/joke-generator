import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import "../styles/JokeInput.css";

export const JokeInput = ({ keyword, setKeyword, clearCategory }) => {
  const handleChange = (e) => {
    setKeyword(e.target.value);
    clearCategory();
  };

  return (
    <Input
      value={keyword}
      onChange={handleChange}
      placeholder="Enter a topic (optional)"
      className="joke-input"
    />
  );
};
