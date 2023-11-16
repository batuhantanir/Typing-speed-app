import React from "react";
import { useSelector } from "react-redux";
import {
  selectCorrectWord,
  selectScore,
  selectWrongWord,
} from "../../redux/RandomWordSlice";
import ReloadBtn from "../reloadBtn";

const GameOver = () => {
  const score = useSelector(selectScore);
  const correct = useSelector(selectCorrectWord);
  const wrong = useSelector(selectWrongWord);

  // console.log(Math.round((correct / (correct + wrong)) * 100));

  return (
    <div className="flex flex-col border rounded bg-[#f7f7f7] text-black w-[250px] min-h-fit">
      <h1 className="text-lg text-white font-bold px-3 py-1 bg-[#4C7E9F] rounded-t">
        Result
      </h1>
      <div className=" border-b-2 py-2 px-3 text-center">
        <p className="text-4xl font-semibold text-[#527A1E]">{score} WPM</p>
        <p className="text-[#33333368]">(words per minute)</p>
      </div>
      <div>
        <p className="flex justify-between px-3 bg-[#ffffff]  border-b-2 ">
          <span>Correct words</span> <span>{correct}</span>
        </p>
        <p className="flex justify-between px-3 border-b-2">
          <span>Wrong words</span> <span>{wrong}</span>
        </p>
        <p className="flex justify-between px-3 bg-[#ffffff]  border-b-2">
          <span>Accuracy</span>{" "}
          <span>
            {correct != 0 && wrong != 0
              ? Math.round((correct / (correct + wrong)) * 100)
              : 0}
            %
          </span>
        </p>
        <div className="my-1 mx-3">
          <ReloadBtn />
        </div>
      </div>
    </div>
  );
};

export default GameOver;
