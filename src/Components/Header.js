import React from "react";
import Netflix_Logo from "../Assets/Netflix_Logo.png";
import { useSelector } from "react-redux";
import { signOutUser } from "../Utils/Authentication/authentication";

const Header = () => {
  const currentUser = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <>
      <div className="absolute w-full px-4 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-52" src={Netflix_Logo} alt="logo" />
        {currentUser && (
          <button
            className="text-white font-bold h-9 p-2 m-4 my-6 pt-1"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
