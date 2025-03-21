import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import "../styles/CategorySelector.css";

const categories = ["Country", "Dad Jokes", "Dark Humor"];

export const CategorySelector = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="category-selector">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`category-button ${activeCategory === category ? "active" : ""}`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
