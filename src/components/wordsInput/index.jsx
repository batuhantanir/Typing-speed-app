import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isOkey,
  selectIndex,
  selectIsOkey,
  selectIsStart,
  selectRandomWord,
  selectTime,
  start,
  timeSet,
} from "../../redux/RandomWordSlice";
import ReloadBtn from "../reloadBtn";

const handleInput = (e, words, index, i, change) => {
  while (i < e.target.value.length && words[index]) {
    if (words[index][i] == e.target.value[i]) {
      change = true;
    } else if (
      words[index][i] != e.target.value[i] &&
      e.target.value[i] != " "
    ) {
      change = false;
    }
    if (e.target.value[i] === " ") console.log("space");
    i++;
  }
  return change;
};

const WordsInput = () => {
  const dispatch = useDispatch();
  const words = useSelector(selectRandomWord);
  const index = useSelector(selectIndex);
  const isStart = useSelector(selectIsStart);
  const time = useSelector(selectTime);
  const [value, setValue] = useState("");
  const i = 0;
  let change = null;

  useEffect(() => {
    dispatch(isOkey(change));
    if (isStart == true && time > 0)
      setInterval(() => dispatch(timeSet()), 1000);
  }, [change, dispatch, isStart]);

  return (
    <div className="flex  gap-x-4 justify-center items-center bg-[#ad575755] w-[80%] py-1 rounded lg:w-[40%]">
      <input
        className="py-1 px-2 border border-black rounded"
        onChange={async (e) => {
          setValue(e.target.value);
          await (change = handleInput(e, words, index, i, change));
          dispatch(isOkey(change));
          isStart ? <></> : dispatch(start());
        }}
        value={value}
        type="text"
      />
      <p className="border text-center w-[36px] py-1 bg-slate-700 text-white rounded">
        {time}
      </p>
      <ReloadBtn setInputValue={setValue}/>
    </div>
  );
};

export default WordsInput;
