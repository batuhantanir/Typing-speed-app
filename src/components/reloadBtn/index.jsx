import React from "react";
import { IoMdRepeat } from "react-icons/io";
import { useDispatch } from "react-redux";
import { randomWord, reload } from "../../redux/RandomWordSlice";

const ReloadBtn = ({ setInputValue }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex justify-center text-xl border px-2 py-[6px] bg-cyan-500 text-white cursor-pointer rounded hover:scale-105 active:scale-90"
      onClick={() => {
        dispatch(reload());
        dispatch(randomWord());
        setInputValue &&  setInputValue("");
      }}
    >
      <IoMdRepeat />
    </div>
  );
};

export default ReloadBtn;
