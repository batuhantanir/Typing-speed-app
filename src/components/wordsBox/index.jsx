// import React from "react";
import { useSelector } from "react-redux";
import {
  selectIndex,
  selectIsOkey,
  selectIsStart,
  selectRandomWord,
} from "../../redux/RandomWordSlice";
import Word from "../word";

const WordsBox = () => {
  const data = useSelector(selectRandomWord);
  const okey = useSelector(selectIsOkey);
  const i = useSelector(selectIndex);
  const isStart = useSelector(selectIsStart);

  console.log(okey);
  //   console.log(data);

  return (
    <div className="h-[70px] w-[80%] overflow-hidden bg-slate-50 rounded border border-black lg:w-[40%]">
      <div className="flex flex-wrap justify-center font-serif">
        {data.map((item, index) => (
          <Word
            key={index}
            index={index}
            item={item}
            isokey={isStart && index == i ? (okey ? "okey" : "notOkey") : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default WordsBox;
