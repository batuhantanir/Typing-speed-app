import { createSlice } from "@reduxjs/toolkit";
import { generate } from "random-words";

const initialState = {
  value: [],
  time: 60,
  score: 0,
  correctWord : 0,
  wrongWord : 0,
  index: 0,
  isOkey: null,
  isStart: false,
  isGameover: false,
};

export const selectRandomWord = (state) => state.randomWords.value;
export const selectTime = (state) => state.randomWords.time;
export const selectScore = (state) => state.randomWords.score;
export const selectCorrectWord = (state) => state.randomWords.correctWord;
export const selectWrongWord = (state) => state.randomWords.wrongWord;
export const selectIndex = (state) => state.randomWords.index;
export const selectIsOkey = (state) => state.randomWords.isOkey;
export const selectIsStart = (state) => state.randomWords.isStart;
export const selectIsGameover = (state) => state.randomWords.isGameover;

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
    timeSet: (state) => {
      if (state.isStart && state.time > -1) state.time -= 1;
      if (state.time == 0) {
        clearInterval(timeSet);
        state.isStart = false;
        state.isGameover = true;
      }
    },
    reload: (state) => {
      state.isStart = false;
      state.time = 60;
      state.score = 0;
      state.index = 0;
      state.isOkey = null;
      state.isGameover = false;
      state.correctWord = 0;
      state.wrongWord = 0;
    },
  },
});

export const { randomWord, isOkey, start, timeSet, reload } =
  RandomWordSlice.actions;

export default RandomWordSlice.reducer;
