import React, { useEffect, useRef, useState } from "react";
import { validateSignIn } from "../Utils/Validations/validations";
import { signIn, signUp } from "../Utils/Authentication/authentication";

const SignIn_Form = () => {
  const errObj = {
    name: null,
    email: null,
    password: null,
    apiError: null,
  };

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(errObj);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    setError(errObj);
  }, [isSignIn]);

  const handleSignInAndSignUp = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const isValid = validateSignIn(isSignIn, email, password, name, setError);

    if (isValid) {
      if (isSignIn) {
        signIn(email, password, setError);
      } else {
        signUp(email, password, setError);
      }
    }
  };

  const toggleSignIn = () => {
    setIsSignIn((isSignIn) => !isSignIn);
  };

  return (
    <div className="absolute w-2/5 bg-black  bg-opacity-80 mx-auto right-0 left-0 p-16 my-24 text-white rounded-md">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-semibold text-2xl pb-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <>
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
            ></input>
            <p className="font-semibold text-yellow-500 py-2">{error?.name}</p>
          </>
        )}

        <input
          ref={emailRef}
          type="text"
          placeholder="Email or Phone Number"
          className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
        ></input>
        <p className="font-semibold text-yellow-500 py-2">{error?.email}</p>

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
        ></input>
        <p className="font-semibold text-yellow-500 py-2">{error?.password}</p>
        <p className="font-semibold text-yellow-500 py-2">{error?.apiError}</p>

        <button
          className="w-full mt-5 px-4 py-3 rounded-md bg-red-700"
          onClick={handleSignInAndSignUp}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-5 cursor-pointer select-none" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up now."
            : "Already a user? Sign In."}
        </p>
      </form>
    </div>
  );
};

export default SignIn_Form;
