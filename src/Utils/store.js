import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import movieSlice from "./Slices/movieSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
  },
});

export default store;
