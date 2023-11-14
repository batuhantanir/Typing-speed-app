import { createSlice } from "@reduxjs/toolkit";
import { generate } from "random-words";

const initialState = {
  value: [],
  time: 60,
  score: 0,
  index: 0,
  isOkey: null,
  isStart: false,
};

export const selectRandomWord = (state) => state.randomWords.value;
export const selectTime = (state) => state.randomWords.time;
export const selectScore = (state) => state.randomWords.score;
export const selectIndex = (state) => state.randomWords.index;
export const selectIsOkey = (state) => state.randomWords.isOkey;
export const selectIsStart = (state) => state.randomWords.isStart;

export const generateRandomWord = () => {
  let wordArr = generate(1000);
  return wordArr;
};

export const RandomWordSlice = createSlice({
  name: "randomWord",
  initialState,
  reducers: {
    // Reducers
    randomWord: (state) => {
      state.value = generateRandomWord();
    },
    isOkey: (state, { payload }) => {
      // console.log(state.isOkey);
      if (payload === true) {
        state.isOkey = true;
      } else if (payload === false) {
        state.isOkey = false;
      }
    },
    start: (state) => {
      state.isStart = true;
    },
    timeSet : (state) => {
      if (state.isStart && state.time > -1) state.time -= 1;
      if (state.time == 0) {
        clearInterval(timeSet)
        state.isStart = false;
      };
    },
  },
});

export const { randomWord, isOkey, start, timeSet} = RandomWordSlice.actions;

export default RandomWordSlice.reducer;
