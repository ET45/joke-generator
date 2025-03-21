import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import "../styles/CategorySelector.css";

const categories = ["Country", "Dad Jokes", "Dark Humor"];

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
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => toggleCategory(category)}
          className={`category-button ${activeCategory === category ? "active" : ""}`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
