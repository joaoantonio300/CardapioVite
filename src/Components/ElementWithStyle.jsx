import { useState } from "react";

const ElementWithStyle = ({ value, title, selectedCategory }) => {
  const handleCategory = () => {
    selectedCategory(category);
  };
  return (
    <>
      {value === "1" ? (
        <div className="relative text-red-600">
          <button>{title}</button>
          <span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
        </div>
      ) : (
        <div>
          <button onClick={() => handleCategory(1)}>{title}</button>
        </div>
      )}
    </>
  );
};

export default ElementWithStyle;
