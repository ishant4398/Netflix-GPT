import { flushSync } from "react-dom";

export const validateSignIn = (isSignIn, email, password, name, setError) => {
  let isValid = true;

  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = name && name.trim() ? true : false;

  setError((err) => ({
    ...err,
    email: isEmailValid ? null : "Please enter a valid email",
    password: isPasswordValid ? null : "Please enter a valid password",
    name: isSignIn || isNameValid ? null : "Please enter a valid name",
  }));

  isValid = isEmailValid && isPasswordValid && (isSignIn || isNameValid);

  return isValid;
};
