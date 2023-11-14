import { createSlice } from "@reduxjs/toolkit";
import { generate} from "random-words";

const initialState = {
    value: [],
    time: 60,
    score: 0,

};

export const selectRandomWord = (state) => state.randomWords.value;
export const selectTime = (state) => state.randomWords.time;
export const selectScore = (state) => state.randomWords.score;

export const generateRandomWord = () => {
    let wordArr = generate(20);
    return(wordArr);
}

export const RandomWordSlice = createSlice({
    name: "randomWord",
    initialState,
    reducers: {
      // Reducers
      randomWord : (state) => {
        state.value = generateRandomWord();
      },
    },
});

export const { randomWord } = RandomWordSlice.actions;

export default RandomWordSlice.reducer;