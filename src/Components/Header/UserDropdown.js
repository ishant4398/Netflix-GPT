import { useRef } from "react";
import { signOutUser } from "../../Utils/Authentication/authentication";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";
import languageTranslations from "../../Utils/languageTranslations";
import { IMG_USER_ICON_URL } from "../../Utils/constants";
import useUserPopoverEvents from "../../Utils/Hooks/useUserPopoverEvents";
import { useNavigate } from "react-router-dom";
import useGetCurrentUser from "../../Utils/Hooks/useGetCurrentUser";

const UserDropdown = () => {
  const currentUser = useGetCurrentUser();
  const currentLang = useGetCurrentLanguage();
  const userDropdownContainerRef = useRef(null);
  const showUserPopup = useUserPopoverEvents(userDropdownContainerRef);
  const navigate = useNavigate();

  const formatDisplayName = currentUser?.displayName?.trim().split(" ")[0];

  const handleSignOut = () => {
    signOutUser();
  };

  const navToWatchList = () => {
    navigate("/watchlist");
  };

  const navToProfile = () => {
    navigate("/profile");
  };

  const navToContact = () => {
    navigate("/contact");
  };

  const navToAdmin = () => {
    navigate("/admin");
  };

  return (
    <div ref={userDropdownContainerRef} className="flex flex-col h-11">
      <div className="flex flex-row">
        <p className="ml-3 mt-[6px] text-white font-bold">
          {formatDisplayName}
        </p>
        <button className="py-2 m-4 my-0 mr-6 pt-1">
          <img
            className="w-[30px] h-[30px]"
            src={IMG_USER_ICON_URL}
            alt="userIcon"
          ></img>
        </button>
      </div>
      {showUserPopup && (
        <ul className="absolute z-10 shadow-md w-auto h-auto rounded-lg bg-gray-800 min-w-[138px] mt-9 pb-3">
          <li
            className="text-white font-bold cursor-pointer pt-3 text-center"
            onClick={navToWatchList}
          >
            {languageTranslations[currentLang]?.watchlistText}
          </li>
          <li
            className="text-white font-bold cursor-pointer pt-3 text-center"
            onClick={navToProfile}
          >
            {languageTranslations[currentLang]?.profileText}
          </li>
          <li
            className="text-white font-bold cursor-pointer pt-3 text-center"
            onClick={navToContact}
          >
            {languageTranslations[currentLang]?.contactText}
          </li>
          {/* <li
            className="text-white font-bold cursor-pointer pt-3 text-center"
            onClick={navToAdmin}
          >
            {languageTranslations[currentLang]?.adminText}
          </li> */}
          <li
            className="text-white font-bold cursor-pointer pt-3 text-center"
            onClick={handleSignOut}
          >
            {languageTranslations[currentLang]?.signOutButtonText}
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown;
