import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white my-3">{title}</h1>
      <div className="flex overflow-x-scroll my-7">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
