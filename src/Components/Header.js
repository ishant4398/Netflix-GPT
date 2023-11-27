import React from "react";
import Netflix_Logo from "../Assets/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="absolute px-4 py-1 bg-gradient-to-b from-black z-10">
      <img className="w-52" src={Netflix_Logo} alt="logo" />
    </div>
  );
};

export default Header;
