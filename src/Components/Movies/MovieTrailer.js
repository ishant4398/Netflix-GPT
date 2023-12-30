import React from "react";
import MovieDescription from "./MovieDescription";
import PlayingTrailer from "./PlayingTrailer";
import useGetNowPlayingMovies from "../../Utils/Hooks/useGetNowPlayingMovies";

const MovieTrailer = () => {
  const movies = useGetNowPlayingMovies();
  if (!movies) return;

  // Selecting First Movie from the result
  const movie = movies[0];

  const { id, original_title, overview } = movie;

  return (
    <div>
      <MovieDescription id={id} title={original_title} overview={overview} />
      <PlayingTrailer movieId={id} />
    </div>
  );
};

export default MovieTrailer;
