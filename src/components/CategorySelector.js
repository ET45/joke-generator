import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import "../styles/CategorySelector.css";

const categories = [
  { label: "Country", emoji: "🌍" },
  { label: "Dad Jokes", emoji: "👨‍🦳" },
  { label: "Dark Humor", emoji: "🌑" }
];

export const CategorySelector = ({
  activeCategory,
  setActiveCategory,
  keyword,
  setKeyword,
  handleFetchJoke,
}) => {

  const toggleCategory = (category) => {
    const isSame = activeCategory === category;

    if (!isSame) {
      setKeyword("");
      setActiveCategory(category);
      handleFetchJoke(category); 
    } else {
      setActiveCategory(null);
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
