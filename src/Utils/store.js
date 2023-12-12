import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import movieSlice from "./Slices/movieSlice";
import gptSlice from "./Slices/gptSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: gptSlice,
  },
});

export default store;
