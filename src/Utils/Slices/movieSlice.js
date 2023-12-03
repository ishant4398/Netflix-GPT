import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchTrailer } from "../thunks";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    trailer: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.nowPlaying = action.payload;
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        const videos = action.payload;

        if (videos && videos.length) {
          let trailer = videos?.find((video) => video.type === "Trailer");
          if (!trailer && videos.length) {
            trailer = videos[0];
          }
          state.trailer = trailer;
        }
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
