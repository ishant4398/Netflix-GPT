import React, { useState } from "react";

const SignIn_Form = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn((isSignIn) => !isSignIn);
  };

  return (
    <div className="absolute w-2/5 bg-black  bg-opacity-80 mx-auto right-0 left-0 p-16 my-24 text-white rounded-md">
      <form>
        <h1 className="font-semibold text-2xl pb-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
          ></input>
        )}

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
        ></input>

        <button className="w-full mt-5 px-4 py-3 rounded-md bg-red-700">
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
