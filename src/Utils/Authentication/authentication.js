import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

export const signUp = async (email, password, setError) => {
  let result = null;

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(user);
  } catch (error) {
    result = `${error.code}: ${error.message}`;
  } finally {
    setError((err) => {
      return { ...err, apiError: result };
    });
  }
};

export const signIn = async (email, password, setError) => {
  let result = null;

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    console.log(user);
  } catch (error) {
    result = `${error.code}: ${error.message}`;
  } finally {
    setError((err) => {
      return { ...err, apiError: result };
    });
  }
};
