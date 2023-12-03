import React from "react";
import MovieDescription from "./MovieDescription";
import PlayingTrailer from "./PlayingTrailer";
import useGetMovie from "../../Utils/Hooks/useGetMovie";

const MovieTrailer = () => {
  const movie = useGetMovie();

  if (!movie) return;

  const { id, original_title, overview } = movie;

  return (
    <>
      <MovieDescription title={original_title} overview={overview} />
      <PlayingTrailer movieId={id} />
    </>
  );
};

export default MovieTrailer;
