import React from "react";
import { MOVIE_LANGUAGES } from "../../Utils/constants";

const MovieLanguage = ({ original_language }) => {
  return (
    <>
      {MOVIE_LANGUAGES[original_language] && (
        <p className="text-white text-md font-bold">
          ({MOVIE_LANGUAGES[original_language]})
        </p>
      )}
    </>
  );
};

export default MovieLanguage;
