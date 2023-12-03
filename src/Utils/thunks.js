import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { API_OPTIONS_GET } from "./constants";

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

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS_GET
  );

  const result = await data.json();

  return result.results;
});

export const fetchTrailer = createAsyncThunk(
  "movies/fetchTrailer",
  async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS_GET
    );
    const result = await data.json();

    return result?.results;
  }
);
