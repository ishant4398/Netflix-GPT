import React from "react";
import MovieTrailer from "./Movies/MovieTrailer";
import MovieSuggestions from "./Movies/MovieSuggestions";

const Browse = () => {
  return (
    <div className="flex flex-col bg-black">
      <MovieTrailer />
      <MovieSuggestions />
    </div>
  );
};

export default Browse;
