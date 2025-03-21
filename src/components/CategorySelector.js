import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import "../styles/CategorySelector.css";

const categories = [
  { label: "Country", emoji: "🌍" },
  { label: "Dad Jokes", emoji: "👨‍🦳" },
  { label: "Dark Humor", emoji: "🌑" }
];

export const CategorySelector = ({ activeCategory, setActiveCategory, keyword, setKeyword }) => {
  const toggleCategory = (category) => {
    if (keyword) setKeyword(""); 

    if (activeCategory === category) {
      setActiveCategory(null); 
    } else {
      setActiveCategory(category); 
    }
  };

  return (
    <div className="category-selector">
     {categories.map(({ label, emoji }) => (
  <Button
    key={label}
    onClick={() => toggleCategory(label)}
    className={`category-button ${activeCategory === label ? "active" : ""}`}
  >
    {emoji} {label}
  </Button>
))}
    </div>
  );
};
