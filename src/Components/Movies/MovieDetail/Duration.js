import React from "react";
import { formatRuntime } from "../../../Utils/helper";
import languageTranslations from "../../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../../Utils/Hooks/useGetCurrentLanguage";

const Duration = ({ duration }) => {
  const currentLang = useGetCurrentLanguage();

  if (!duration) return;

  const durationOfMovie = formatRuntime(duration);

  return (
    <>
      <p className="text-white text-md font-bold">
        {languageTranslations[currentLang].durationHeading}
      </p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{durationOfMovie}</span>
      </div>
    </>
  );
};

export default Duration;
