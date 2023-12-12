import React from "react";
import Netflix_Logo from "../Assets/Netflix_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../Utils/Authentication/authentication";
import { PROFILE_PIC_ICON } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { toggleGPTSearch } from "../Utils/Slices/gptSlice";

const Header = () => {
  const currentUser = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOutUser();
  };

  const handleNavToSearch = () => {
    navigate("/search");
    dispatch(toggleGPTSearch());
  };

  const handleNavToBrowse = () => {
    navigate("/browse");
    dispatch(toggleGPTSearch());
  };

  return (
    <>
      <div className="absolute w-full px-4 py-1 bg-gradient-to-b from-black z-20 flex justify-between">
        <img className="w-52 m-2" src={Netflix_Logo} alt="logo" />
        {currentUser && (
          <div className="flex">
            {/* <div>
              <img
                src={PROFILE_PIC_ICON}
                alt="profile-pic"
                className="w-12 h-12 m-4"
              ></img>
              <p className="-mt-4 ml-3 text-blue-700 font-bold">
                {currentUser?.displayName ? `(${currentUser.displayName})` : ""}
              </p>
            </div> */}
            {showGPTSearch && (
              <button
                className="text-white font-bold h-9 p-2 m-4 my-0 mr-6 pt-1"
                onClick={handleNavToBrowse}
              >
                Home
              </button>
            )}
            {!showGPTSearch && (
              <button
                className="text-white font-bold h-9 p-2 m-4 my-0 mr-6 pt-1"
                onClick={handleNavToSearch}
              >
                🔍 GPT Search
              </button>
            )}
            <button
              className="text-white font-bold h-9 p-2 m-4 my-0 mr-6 pt-1"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
