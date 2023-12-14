import React from "react";
import { useSelector } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";

const MovieDescription = ({ title, overview }) => {
  const currentLang = useSelector((store) => store.config.currentLang);

  return (
    <div className="w-screen aspect-video absolute z-10 text-white bg-gradient-to-r from-black">
      <div className="m-6 p-6 my-[132px] flex flex-col">
        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="w-1/3 my-2">{overview}</span>
        <div className="my-4 font-semibold">
          <button className="w-32 h-10 bg-white text-black rounded-md hover:bg-opacity-80">
            {languageTranslations[currentLang].playButtonText}
          </button>
          <button className="w-32 h-10 mx-3 bg-gray-500 bg-opacity-50 text-white rounded-md hover:bg-opacity-80">
            {languageTranslations[currentLang].moreInfoButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
