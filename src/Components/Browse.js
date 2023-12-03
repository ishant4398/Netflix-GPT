import React from "react";
import MovieTrailer from "./Movies/MovieTrailer";
import MovieSuggestions from "./Movies/MovieSuggestions";

const Browse = () => {
  return (
    <div className="absolute">
      <MovieTrailer />
      <MovieSuggestions />
    </div>
  );
};

export default Browse;
