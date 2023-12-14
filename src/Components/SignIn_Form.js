import React, { useEffect, useRef, useState } from "react";
import { validateSignIn } from "../Utils/Validations/validations";
import { signIn, signUp } from "../Utils/Authentication/authentication";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/Slices/userSlice";
import languageTranslations from "../Utils/languageTranslations";

const SignIn_Form = () => {
  const errObj = {
    name: null,
    email: null,
    password: null,
    apiError: null,
  };

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(errObj);
  const [passwordType, setPasswordType] = useState("password");
  const currentLang = useSelector((store) => store.config.currentLang);

  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    setError(errObj);
  }, [isSignIn]);

  const addUserToRedux = (user) => {
    const { uid, email, displayName, photoURL } = user;

    const userObj = {
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    };

    dispatch(addUser(userObj));
  };

  const handleSignInAndSignUp = async () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const isValid = validateSignIn(isSignIn, email, password, name, setError);

    if (isValid) {
      let user = null;

      try {
        if (isSignIn) {
          user = await signIn(email, password, setError);
        } else {
          user = await signUp(email, password, name, setError);
        }

        if (user) {
          addUserToRedux(user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const toggleSignIn = () => {
    setIsSignIn((isSignIn) => !isSignIn);
  };

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="absolute w-2/5 bg-black  bg-opacity-80 mx-auto right-0 left-0 p-16 my-24 text-white rounded-md">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-semibold text-2xl pb-3">
          {isSignIn
            ? languageTranslations[currentLang].signInHeading
            : languageTranslations[currentLang].signUpHeading}
        </h1>

        {!isSignIn && (
          <>
            <input
              ref={nameRef}
              type="text"
              placeholder={languageTranslations[currentLang].namePlaceholder}
              className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
            ></input>
            <p className="font-semibold text-yellow-500 py-2">{error?.name}</p>
          </>
        )}

        <input
          ref={emailRef}
          type="text"
          placeholder={languageTranslations[currentLang].emailPlaceHolder}
          className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800"
        ></input>
        <p className="font-semibold text-yellow-500 py-2">{error?.email}</p>

        <div className="flex">
          <input
            ref={passwordRef}
            type={passwordType}
            placeholder={languageTranslations[currentLang].passwordPlaceholder}
            className="w-full rounded-md mt-4 px-4 py-3 bg-gray-800 flex-1 mr-1"
          ></input>
          <button
            className="-ml-7 pt-3 mr-1"
            onClick={togglePasswordVisibility}
          >
            👁️
          </button>
        </div>

        <p className="font-semibold text-yellow-500 py-2">{error?.password}</p>
        <p className="font-semibold text-yellow-500 py-2">{error?.apiError}</p>

        <button
          className="w-full mt-5 px-4 py-3 rounded-md bg-red-700"
          onClick={handleSignInAndSignUp}
        >
          {isSignIn
            ? languageTranslations[currentLang].signInHeading
            : languageTranslations[currentLang].signUpHeading}
        </button>

        <p className="py-5 cursor-pointer select-none" onClick={toggleSignIn}>
          {isSignIn
            ? languageTranslations[currentLang].newToNetflix
            : languageTranslations[currentLang].alreadyUserText}
        </p>
      </form>
    </div>
  );
};

export default SignIn_Form;
