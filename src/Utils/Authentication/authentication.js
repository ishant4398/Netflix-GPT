import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

export const signUp = async (email, password, name, setError) => {
  let result = null;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });

    return auth.currentUser;
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
    await signInWithEmailAndPassword(auth, email, password);

    return auth.currentUser;
  } catch (error) {
    result = `${error.code}: ${error.message}`;
  } finally {
    setError((err) => {
      return { ...err, apiError: result };
    });
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const result = `${error.code}: ${error.message}`;
    console.error(result);
  }
};
