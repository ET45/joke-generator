import React from "react";
import { Button } from "@progress/kendo-react-buttons";

const categories = ["Country", "Dad Jokes", "Dark Humor"];

export const CategorySelector = ({ activeCategory, setActiveCategory }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "15px" }}>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setActiveCategory(category)}
          style={{
            background: activeCategory === category ? "#0078D4" : "#333",
            color: "white",
            borderRadius: "5px",
            padding: "8px 15px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
