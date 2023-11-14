import { configureStore } from "@reduxjs/toolkit";
import RandomWordSlice from "./RandomWordSlice";

export const store = configureStore({
  reducer: {
    // Reducers
    randomWords: RandomWordSlice,
  },
});
