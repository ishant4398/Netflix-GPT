import React from "react";
import MoviesList from "./MoviesList";
import useGetNowPlayingMovies from "../../Utils/Hooks/useGetNowPlayingMovies";
import useGetPopularMovies from "../../Utils/Hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../../Utils/Hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../../Utils/Hooks/useGetUpcomingMovies";

const MovieSuggestions = () => {
  const nowPlayingMovies = useGetNowPlayingMovies();
  const popularMovies = useGetPopularMovies();
  const topRatedMovies = useGetTopRatedMovies();
  const upcomingMovies = useGetUpcomingMovies();

  return (
    <div className="pt-[700px] px-12 py-12 bg-black w-screen">
      <MoviesList title={"Now Playing"} movies={nowPlayingMovies} />
      <MoviesList title={"Popular"} movies={popularMovies} />
      <MoviesList title={"Top Rated"} movies={topRatedMovies} />
      <MoviesList title={"Upcoming"} movies={upcomingMovies} />
    </div>
  );
};

export default MovieSuggestions;
