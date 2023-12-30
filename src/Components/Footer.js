import React from "react";
import languageTranslations from "../Utils/languageTranslations";
import useGetCurrentLanguage from "../Utils/Hooks/useGetCurrentLanguage";

const Footer = () => {
  const currentLang = useGetCurrentLanguage();

  return (
    <div className="bottom-0">
      <h1 className="font-semibold text-white bg-black px-12 pb-4">
        @{languageTranslations[currentLang].websiteOwner}
      </h1>
    </div>
  );
};

export default Footer;
