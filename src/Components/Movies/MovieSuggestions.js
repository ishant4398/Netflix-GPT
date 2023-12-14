import React from "react";
import MoviesList from "./MoviesList";
import useGetNowPlayingMovies from "../../Utils/Hooks/useGetNowPlayingMovies";
import useGetPopularMovies from "../../Utils/Hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../../Utils/Hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../../Utils/Hooks/useGetUpcomingMovies";
import { useSelector } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";

const MovieSuggestions = () => {
  const nowPlayingMovies = useGetNowPlayingMovies();
  const popularMovies = useGetPopularMovies();
  const topRatedMovies = useGetTopRatedMovies();
  const upcomingMovies = useGetUpcomingMovies();
  const currentLang = useSelector((store) => store.config?.currentLang);

  return (
    <div className="pt-[715px] px-12 bg-black w-screen">
      <MoviesList
        title={languageTranslations[currentLang].nowPlayingMovieHeading}
        movies={nowPlayingMovies}
      />
      <MoviesList
        title={languageTranslations[currentLang].popularMoviesHeading}
        movies={popularMovies}
      />
      <MoviesList
        title={languageTranslations[currentLang].topRatedMoviesHeading}
        movies={topRatedMovies}
      />
      <MoviesList
        title={languageTranslations[currentLang].upcomingMoviesHeading}
        movies={upcomingMovies}
      />
    </div>
  );
};

export default MovieSuggestions;
