import React, { Fragment } from "react";
import languageTranslations from "../../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../../Utils/Hooks/useGetCurrentLanguage";

const AudioLanguages = ({ languages }) => {
  const currentLang = useGetCurrentLanguage();
  if (!languages?.length) return;

  return (
    <>
      <p className="text-white text-md font-bold">
        {languageTranslations[currentLang].audioLanguageHeading}
      </p>
      <div className="text-[#aaa] font-[500] mt-2">
        {languages.map((language) => (
          <Fragment key={language.english_name}>
            <span>{language.english_name}</span>
            <span className="pr-1 last:hidden">,</span>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default AudioLanguages;
