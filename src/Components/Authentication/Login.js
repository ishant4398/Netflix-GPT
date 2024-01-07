import React from "react";
import { BACKGROUND_IMAGE_URL } from "../../Utils/constants";
import SignInForm from "./SignInForm";

const Login = () => {
  return (
    <div>
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto"
          src={BACKGROUND_IMAGE_URL}
          alt="netflix-cover-image"
        />
      </div>
      <SignInForm />
    </div>
  );
};

export default Login;
