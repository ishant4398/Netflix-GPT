import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
