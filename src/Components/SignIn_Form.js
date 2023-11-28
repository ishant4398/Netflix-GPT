import React, { useEffect, useRef, useState } from "react";
import { validateSignIn } from "../Utils/Validations/validations";

const SignIn_Form = () => {
  const errObj = {
    name: null,
    email: null,
    password: null,
  };

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(errObj);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    setError(errObj);
  }, [isSignIn]);

  const handleSignInButton = () => {
    const isValid = validateSignIn(
      isSignIn,
      email.current?.value,
      password.current?.value,
      name.current?.value,
      setError
    );
    console.log("Form Valid:", isValid);
    console.log("error:", error);
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
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
            ></input>
            <p className="font-semibold text-yellow-500 py-2">{error?.name}</p>
          </>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
        ></input>
        <p className="font-semibold text-yellow-500 py-2">{error?.email}</p>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
        ></input>
        <p className="font-semibold text-yellow-500 py-2">{error?.password}</p>

        <button
          className="w-full mt-5 px-4 py-3 rounded-md bg-red-700"
          onClick={handleSignInButton}
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
