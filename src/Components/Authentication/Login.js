import React from "react";
import SignIn_Form from "./SignIn_Form";
import { BACKGROUND_IMAGE_URL } from "../../Utils/constants";

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
      <SignIn_Form />
    </div>
  );
};

export default Login;
