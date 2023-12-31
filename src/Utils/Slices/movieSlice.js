import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieDetails,
  fetchMovieSearchResults,
  fetchNowPlayingMovies,
  fetchPlayingMovie,
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
    searchMovieResults: [],
    trailer: null,
    playingMovie: null,
    movieDetails: null,
    isMovieResultsLoading: false,
  },
  reducers: {
    clearSearchMovieResults: (state) => {
      state.searchMovieResults = [];
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
      })
      .addCase(fetchPlayingMovie.fulfilled, (state, action) => {
        const videos = action.payload;

        if (videos && videos.length) {
          let movie = videos?.find((video) => video.type === "Trailer");
          if (!movie && videos.length) {
            movie = videos[0];
          }
          state.playingMovie = movie;
        }
      })
      .addCase(fetchMovieSearchResults.pending, (state) => {
        state.isMovieResultsLoading = true;
      })
      .addCase(fetchMovieSearchResults.fulfilled, (state, action) => {
        const searchResults = action.payload;

        const moviesArr = searchResults?.reduce((acc, curr) => {
          if (curr.results?.length) {
            acc = [...acc, ...curr.results];
          }
          return acc;
        }, []);

        state.isMovieResultsLoading = false;
        state.searchMovieResults = moviesArr;
      })
      .addCase(fetchMovieSearchResults.rejected, (state) => {
        state.isMovieResultsLoading = false;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
      });
  },
});

export const { clearSearchMovieResults } = movieSlice.actions;

export default movieSlice.reducer;
