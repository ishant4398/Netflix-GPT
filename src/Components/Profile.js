import React from "react";
import languageTranslations from "../Utils/languageTranslations";
import useGetCurrentLanguage from "../Utils/Hooks/useGetCurrentLanguage";
import useGetCurrentUser from "../Utils/Hooks/useGetCurrentUser";
import { getLocalZoneTime } from "../Utils/helper";

const Profile = () => {
  const currentUser = useGetCurrentUser();
  const currentLang = useGetCurrentLanguage();

  if (!currentUser) return;

  const { displayName, email, emailVerified, reloadUserInfo } = currentUser;

  //   const lastLoginTime = getLocalZoneTime(reloadUserInfo?.lastLoginAt);

  return (
    <div className="flex flex-col bg-black h-screen text-white">
      <h1 className="text-3xl font-semibold mt-32 mx-11">
        {languageTranslations[currentLang].profileText}
      </h1>
      <div className=" h-auto px-11 rounded-lg my-4 bg-black">
        <div className="mt-6">
          <p className="text-white text-md font-bold">
            {languageTranslations[currentLang].nameHeading}
          </p>
          <div className="text-[#aaa] font-[500] mt-2">
            <span>{displayName}</span>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-white text-md font-bold">
            {languageTranslations[currentLang].emailHeading}
          </p>
          <div className="text-[#aaa] font-[500] mt-2">
            <span>{email}</span>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-white text-md font-bold">
            {languageTranslations[currentLang].emailVerifiedHeading}
          </p>
          <div className="text-[#aaa] font-[500] mt-2">
            <span>
              {emailVerified
                ? languageTranslations[currentLang].yes
                : languageTranslations[currentLang].no}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
