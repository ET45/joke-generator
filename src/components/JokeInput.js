import React, { useEffect, useState } from "react";
import { Input } from "@progress/kendo-react-inputs";
import "../styles/JokeInput.css";

const funnyPlaceholders = [
  "Cheese",
  "Your mom",
  "Bananas",
  "404 errors",
  "Monday mornings",
  "JavaScript",
  "Online dates",
  "Dad shoes",
  "Tax evasion 👀",
  "Zoom meetings"
];

export const JokeInput = ({ keyword, setKeyword, clearCategory }) => {
  const [placeholder, setPlaceholder] = useState(funnyPlaceholders[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * funnyPlaceholders.length);
      setPlaceholder(funnyPlaceholders[random]);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
    clearCategory(); 
  };

  return (
    <div className="joke-input-wrapper">
      <Input
        value={keyword}
        onChange={handleChange}
        placeholder={placeholder}
        className="joke-input"
      />
    </div>
  );
};
