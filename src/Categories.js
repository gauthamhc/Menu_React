import React from "react";

const Categories = ({ filterItem, categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};
export default Categories;
