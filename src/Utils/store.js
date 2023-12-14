import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import movieSlice from "./Slices/movieSlice";
import gptSlice from "./Slices/gptSlice";
import configSlice from "./Slices/configSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default store;
