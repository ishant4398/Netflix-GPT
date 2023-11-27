import React from "react";
import Header from "./Header";
import SignIn_Form from "./SignIn_Form";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-bg-image"
        />
      </div>
      <SignIn_Form />
    </div>
  );
};

export default Login;
