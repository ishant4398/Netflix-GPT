import React from "react";
import languageTranslations from "../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const MovieCard_Shimmer = () => {
  const shimmerArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const currentLang = useGetCurrentLanguage();

  return (
    <div className="flex text-white p-11 flex-col bg-black">
      <h1 className="text-xl font-semibold">
        {languageTranslations[currentLang]?.movieSearchResult}
      </h1>
      <div className="flex mt-11 flex-wrap">
        {shimmerArr.map((shimmer) => (
          <div key={shimmer} className="flex flex-col mr-10">
            <div className="flex w-64 bg-gray-500 mb-4 mt-2 h-44 rounded-lg"></div>
            <div className="flex w-64 bg-gray-500 mb-2 h-4 rounded-md"></div>
            <div className="flex w-24 bg-gray-500 mb-4 h-4 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard_Shimmer;
