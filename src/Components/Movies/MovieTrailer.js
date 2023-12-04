import React from "react";
import MovieDescription from "./MovieDescription";
import PlayingTrailer from "./PlayingTrailer";
import useGetNowPlayingMovies from "../../Utils/Hooks/useGetNowPlayingMovies";

const MovieTrailer = () => {
  const movies = useGetNowPlayingMovies();
  if (!movies) return;

  const movie = movies.length ? movies[0] : null;

  const { id, original_title, overview } = movie;

  return (
    <div>
      <MovieDescription title={original_title} overview={overview} />
      <PlayingTrailer movieId={id} />
    </div>
  );
};

export default MovieTrailer;
