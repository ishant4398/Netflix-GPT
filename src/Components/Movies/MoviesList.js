import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;
  // console.log(movies);

  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
