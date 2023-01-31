import React from "react";

const Checkbox = ({handleChange, item}) => {
  return (
    <div  className="flex gap-4 main">
      <input
        onClick={(e) => handleChange(e, item)}
        type="checkbox"
      ></input>
      <label className="text-xs">{item.name}</label>
    </div>
  );
};

export default Checkbox;
