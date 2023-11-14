import React, { useEffect } from "react";
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
  const i = 0;
  let change = null;

  useEffect(() => {
    dispatch(isOkey(change));
    if (isStart == true && time > 0) setInterval(()=> dispatch(timeSet()),1000);
  }, [change, dispatch, isStart]);

  return (
    <div className="flex  gap-x-4">
      <input
        onChange={async (e) => {
          await (change = handleInput(e, words, index, i, change));
          dispatch(isOkey(change));
          isStart ? <></> : dispatch(start());
        }}
        type="text"
      />
      <p className="border px-2 py-1 bg-slate-700 text-white">{time}</p>
    </div>
  );
};

export default WordsInput;
