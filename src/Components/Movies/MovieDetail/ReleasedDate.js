import React from "react";
import { convertDateFormat } from "../../../Utils/helper";
import languageTranslations from "../../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../../Utils/Hooks/useGetCurrentLanguage";

const ReleasedDate = ({ release_date }) => {
  const currentLang = useGetCurrentLanguage();

  if (!release_date) return;

  const releasedDate = convertDateFormat(release_date);

  return (
    <>
      <p className="text-white text-md font-bold">
        {languageTranslations[currentLang].releasedDateHeading}
      </p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{releasedDate}</span>
      </div>
    </>
  );
};

export default ReleasedDate;
