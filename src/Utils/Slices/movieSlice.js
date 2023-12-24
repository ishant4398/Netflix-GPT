import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieSearchResults,
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
    searchMovieResults: [],
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
      })
      .addCase(fetchMovieSearchResults.fulfilled, (state, action) => {
        const searchResults = action.payload;

        const moviesArr = searchResults?.reduce((acc, curr) => {
          if (curr.results?.length) {
            acc = [...acc, ...curr.results];
          }
          return acc;
        }, []);

        state.searchMovieResults = moviesArr;
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
