import React from "react";
import { AlphabetChangedState } from "../../interface/Interfaces";
type Props = { handleChange:(e:React.ChangeEvent<HTMLInputElement>,item:AlphabetChangedState)=>void, item: AlphabetChangedState };
const Checkbox = ({ handleChange, item }:Props) => {
  return (
    <div className="flex gap-4 main">
      <input onChange={(e) => handleChange(e, item)} type="checkbox"></input>
      <label className="text-xs">{item.name}</label>
    </div>
  );
};

export default Checkbox;
