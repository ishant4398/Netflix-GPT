import React from "react";
// import Netflix_Logo from "../../Assets/Netflix_Logo.png";
import Netflix_Logo from "../../Assets/Moviesflix-GPT.png";
import UserDropdown from "./UserDropdown";
import LanguageDropdown from "./LanguageDropdown";
import GPTSearch from "./GPTSearch";
import Home from "./Home";
import { useLocation } from "react-router-dom";
import useGetCurrentUser from "../../Utils/Hooks/useGetCurrentUser";

const Header = () => {
  const currentUser = useGetCurrentUser();
  const { pathname } = useLocation();

  const isHome = pathname.includes("browse");
  const isGPTSearch = pathname.includes("search");

  return (
    <div className="absolute w-full px-4 py-1 bg-gradient-to-b from-black z-20 flex justify-between">
      {/* <img className="w-52 m-2" src={Netflix_Logo} alt="logo" /> */}
      <img className="w-[295px] h-11 m-7 mt-10" src={Netflix_Logo} alt="logo" />
      <div className="flex flex-row">
        <LanguageDropdown />
        {currentUser && (
          <>
            {!isHome && <Home />}
            {!isGPTSearch && <GPTSearch />}
            <UserDropdown />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
