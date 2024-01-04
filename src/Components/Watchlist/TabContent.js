import React from "react";
import MovieCard from "../Movies/MovieCard";
import languageTranslations from "../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";
import Message from "../Message";

const TabContent = ({ movies }) => {
  const currentLang = useGetCurrentLanguage();

  if (!movies || !movies.length)
    return (
      <Message message={languageTranslations[currentLang]?.notAddedyetText} />
    );

  return (
    <div className="flex mt-6 flex-wrap bg-black">
      {movies.map(
        (movie) =>
          movie.poster_path && (
            <div key={movie.id} className="flex mt-3 mb-6 mr-3 flex-col">
              <MovieCard movie={movie} />
            </div>
          )
      )}
    </div>
  );
};

export default TabContent;
