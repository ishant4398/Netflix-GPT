import React from "react";
import languageTranslations from "../../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../../Utils/Hooks/useGetCurrentLanguage";

const Adult = ({ adult }) => {
  const currentLang = useGetCurrentLanguage();

  const { adultHeading, yes, no } = languageTranslations[currentLang];

  return (
    <>
      <p className="text-white text-md font-bold">{adultHeading}</p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{adult ? yes : no}</span>
      </div>
    </>
  );
};

export default Adult;
