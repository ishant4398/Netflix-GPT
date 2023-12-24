import React from "react";
import languageTranslations from "../../Utils/languageTranslations";
import { useSelector } from "react-redux";

const NoResultFound = () => {
  const currentLang = useSelector((store) => store.config.currentLang);

  return (
    <div className="flex text-white p-11 flex-col bg-black justify-center mt-[8%]">
      <h1 className="text-xl font-semibold text-center">
        {languageTranslations[currentLang]?.noSearchResultFound}
      </h1>
    </div>
  );
};

export default NoResultFound;
