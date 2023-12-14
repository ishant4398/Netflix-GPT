import React from "react";
import languageTranslations from "../Utils/languageTranslations";
import { useSelector } from "react-redux";

const Footer = () => {
  const currentLang = useSelector((store) => store.config.currentLang);

  return (
    <div className="bottom-0">
      <h1 className="font-semibold text-white bg-black px-12 pb-4">
        @{languageTranslations[currentLang].websiteOwner}
      </h1>
    </div>
  );
};

export default Footer;
