import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrailer,
  fetchUpcomingMovies,
} from "../thunks";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    trailer: null,
    onBanner: false,
  },
  reducers: {
    setBannerTrue: (state, action) => {
      state.onBanner = true;
    },
    setBannerFalse: (state, action) => {
      state.onBanner = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlaying = action.payload;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popular = action.payload;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRated = action.payload;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcoming = action.payload;
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

export const { setBannerTrue, setBannerFalse } = movieSlice.actions;

export default movieSlice.reducer;
