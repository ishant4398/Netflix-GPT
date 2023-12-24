import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { API_OPTIONS_GET, TMDB_MOVIE_URL } from "./constants";
import openai from "./openAI";

// We are not using signIn_Thunk
export const signIn_Thunk = createAsyncThunk(
  "user/SignIn",
  async (email, password, setError) => {
    let result = null;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      return auth.currentUser;
    } catch (error) {
      result = `${error.code}: ${error.message}`;
    } finally {
      setError((err) => {
        return { ...err, apiError: result };
      });
    }
  }
);

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlayingMovies",
  async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS_GET
    );

    const result = await data.json();

    return result.results;
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const data = await fetch(
      TMDB_MOVIE_URL + "popular?page=1",
      API_OPTIONS_GET
    );

    const result = await data.json();

    return result.results;
  }
);
export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const data = await fetch(
      TMDB_MOVIE_URL + "top_rated?page=1",
      API_OPTIONS_GET
    );

    const result = await data.json();

    return result.results;
  }
);
export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcomingMovies",
  async () => {
    const data = await fetch(
      TMDB_MOVIE_URL + "upcoming?page=1",
      API_OPTIONS_GET
    );

    const result = await data.json();

    return result.results;
  }
);

export const fetchTrailer = createAsyncThunk(
  "movies/fetchTrailer",
  async (movieId) => {
    const data = await fetch(
      TMDB_MOVIE_URL + movieId + "/videos",
      API_OPTIONS_GET
    );
    const result = await data.json();

    return result?.results;
  }
);

export const fetchGPT_SearchResults = createAsyncThunk(
  "gpt/fetchGPT_SearchResults",
  async (GPT_Query) => {
    const GPT_Results = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPT_Query }],
      model: "gpt-3.5-turbo",
    });

    // console.log(GPT_Results?.choices[0]?.message);
    return GPT_Results?.choices[0]?.message?.content;

    // For Testing:-
    // const GPT_Results = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("Andaz Apna Apna,Chupke Chupke,Golmaal");
    //   }, 1000);
    // });

    // return await GPT_Results;
  }
);

export const fetchMovieSearchResults = createAsyncThunk(
  "movies/fetchMovieSearchResults",
  async (TMDB_SearchQuery) => {
    const movies_result = TMDB_SearchQuery.map((movie) => fetchMovie(movie));
    const finalResult = await Promise.all(movies_result);
    // console.log(finalResult);
    return finalResult;
  }
);

const fetchMovie = async (movie) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
    API_OPTIONS_GET
  );
  const result = await data.json();
  return result;
};
