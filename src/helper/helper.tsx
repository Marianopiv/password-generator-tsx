import Swal from "sweetalert2";
import { AlphabetChangedState } from "../interface/Interfaces";
export const generateRandomLetter = (
  alphabetChanged: AlphabetChangedState[]
): (string | number)[] => {
  return alphabetChanged.map(
    (item:AlphabetChangedState) => item.content[Math.floor(Math.random() * item.content.length)]
  );
};

export const copy = (password: (string | number)[]) => {
  navigator.clipboard.writeText(password.join().replaceAll(",", ""));
  Swal.fire({
    icon: "success",
    text: "Copied to Clipboard!",
    confirmButtonColor: "#000",
    confirmButtonText: "OK",
  });
};

export const colorDecider = (characters: number) => {
  return characters < 8
    ? "text-red-500"
    : characters >= 8 && characters < 11
    ? "text-yellow-400"
    : "text-green-500";
};
export const checkBoxesDecider = (characters: number, array: string[]) => {
  return characters < 8
    ? array.slice(0, 1)
    : characters >= 8 && characters < 11
    ? array.slice(0, 2)
    : array;
};
