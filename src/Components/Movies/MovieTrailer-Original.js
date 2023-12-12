import React from "react";
import MovieDescription from "./MovieDescription";
import PlayingTrailer from "./PlayingTrailer";
import useGetNowPlayingMovies from "../../Utils/Hooks/useGetNowPlayingMovies";

const MovieTrailer = () => {
  const movies = useGetNowPlayingMovies();
  if (!movies) return;

  const movieTrailers = movies.slice(0, 5);
  console.log(movieTrailers);

  // Selecting First Movie from the result
  // const movie = movies[0];

  // const { id, original_title, overview } = movie;

  return (
    <>
      {movieTrailers.map((trailer) => (
        <div>
          <MovieDescription
            title={trailer.original_title}
            overview={trailer.overview}
          />
          <PlayingTrailer movieId={trailer.id} />
        </div>
      ))}
    </>
  );
};

export default MovieTrailer;
