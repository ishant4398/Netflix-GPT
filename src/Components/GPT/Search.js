import React from "react";
import { useSelector } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";
import { BACKGROUND_IMAGE_URL } from "../../Utils/constants";

const Search = () => {
  const currentLang = useSelector((store) => store.config.currentLang);

  return (
    <div className="flex justify-center bg-black h-screen">
      {/* <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE_URL} alt="netflix-cover-image" />
      </div> */}
      <div className="grid grid-cols-12 w-[55%] mt-28 h-11">
        <input
          className="col-span-10 p-2 px-4 rounded-md"
          type="text"
          placeholder={
            languageTranslations[currentLang].gptSearchPlaceholderValue
          }
        ></input>
        <button className="col-span-2 p-2 mx-4 bg-red-700 text-white font-semibold rounded-md">
          {languageTranslations[currentLang].gptSearchButton}
        </button>
      </div>
    </div>
  );
};

export default Search;
