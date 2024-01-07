import React from "react";
import languageTranslations from "../Utils/languageTranslations";
import useGetCurrentLanguage from "../Utils/Hooks/useGetCurrentLanguage";
import { WEBSITE_OWNER_EMAIL } from "../Utils/constants";

const Contact = () => {
  const currentLang = useGetCurrentLanguage();

  return (
    <div className="flex flex-col bg-black h-screen text-white">
      <h1 className="text-3xl font-semibold mt-32 mx-11">
        {languageTranslations[currentLang].contactText}
      </h1>
      <div className=" h-auto px-11 rounded-lg my-4 bg-black">
        <div className="mt-6">
          <p className="text-white text-md font-bold">
            {languageTranslations[currentLang].websiteOwnerHeading}
          </p>
          <div className="text-[#aaa] font-[500] mt-2">
            <span>{languageTranslations[currentLang].websiteOwnerName}</span>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-white text-md font-bold">
            {languageTranslations[currentLang].emailHeading}
          </p>
          <div className="text-[#aaa] font-[500] mt-2">
            <span>{WEBSITE_OWNER_EMAIL}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
