import React, { useEffect, useState } from "react";
import { strong, optionsFull } from "../config/config";
import rightArrow from "../../assets/rightArrow.png";
import copyIcon from "../../assets/copyIcon.png";
import Swal from "sweetalert2";
import "./style.css";
import {
  generateRandomLetter,
  copy,
  colorDecider,
  checkBoxesDecider,
} from "../../helper/helper";
import Strength from "../strength/Strength";
import Checkbox from "../checkbox/Checkbox";
import { AlphabetChangedState } from "../../interface/Interfaces";
const Home = () => {
  const [characters, setCharacters] = useState<number>(4);
  const [password, setPassword] = useState<string[]>([]);
  const [alphabetChanged, setAlphabetChanged] = useState<
    AlphabetChangedState[]
  >([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    selected: { name: string; content: (string | number)[] }
  ) => {
    if (event.target.checked) {
      setAlphabetChanged([...alphabetChanged, selected]);
    } else {
      setAlphabetChanged(
        alphabetChanged.filter((item) => !selected.name.includes(item.name))
      );
    }
  };

  const handleClick = () => {
    if (alphabetChanged.length > 0) {
      let pass: (string | number)[] = [];
      for (let i = 0; i < characters; i++) {
        pass = [...generateRandomLetter(alphabetChanged), ...pass];
      }
      setPassword(
        [...pass.toString().slice(0, characters * 2)].filter(
          (item) => item !== ","
        )
      );
    } else {
      Swal.fire({
        text: "Select at least one option with the checkbox",
        confirmButtonColor: "#000",
        confirmButtonText: "OK",
      });
    }
  };

  const handleCharacters = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(event);
    setCharacters(Number(value));
  };

  useEffect(() => {}, [characters]);

  return (
    <>
      <div className="bg-black flex justify-center w-screen h-screen text-white items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-gray-500 text-lg"> Password Generator</h1>
          <div className="flex mb-3 items-center justify-between px-2 py-0 bg-stone-800">
            <h3 className="my-5 text-gray-500 ">{password}</h3>
            <img
              className={`w-4 h-4 ${
                password.length > 0 ? "hover:cursor-pointer " : ""
              } `}
              onClick={() => (password.length > 0 ? copy(password) : null)}
              src={copyIcon}
              alt=""
            />
          </div>
          <div className="bg-stone-800 flex flex-col gap-5 px-4 w-64 py-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs ">Character Length</h3>
              <h3 className="text-green-1000">{characters}</h3>
            </div>
            <input
              className=""
              min={4}
              max={16}
              type="range"
              value={characters}
              name=""
              id=""
              onChange={handleCharacters}
            />
            <div className="flex flex-col gap-3">
              {optionsFull.map((item:AlphabetChangedState, index) => (
                <Checkbox key={index} item={item} handleChange={handleChange} />
              ))}
            </div>
            <div className=" bg-stone-900 p-3 flex justify-between items-center">
              <h3 className="uppercase text-gray-500 text-xs">strength</h3>{" "}
              <div className="flex">
                {checkBoxesDecider(characters, strong).map(
                  (item: string, index: number) => (
                    <Strength
                      classColor={colorDecider(characters)}
                      key={index}
                      item={item}
                    />
                  )
                )}
              </div>
              
            </div>
            <div
              onClick={handleClick}
              className="flex justify-center items-center gap-2 hover:cursor-pointer  py-3 font-semibold text-black text-xs bg-green-1000"
            >
              Generate
              <img className="w-2 h-2" src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
