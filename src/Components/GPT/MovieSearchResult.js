import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";
import MovieCard from "../Movies/MovieCard";
import { MOVIE_LANGUAGES } from "../../Utils/constants";
import MovieCard_Shimmer from "../Shimmer/MovieCard_Shimmer";
import NoResultFound from "./NoResultFound";
import { useSearchParams } from "react-router-dom";

const MovieSearchResult = () => {
  const currentLang = useSelector((store) => store.config.currentLang);
  const TMDB_Movie_SearchResult = useSelector(
    (store) => store.movies.searchMovieResults
  );

  const isGPT_SearchResultsLoading = useSelector(
    (store) => store.gpt.isGPT_SearchResultsLoading
  );
  const isMovieResultsLoading = useSelector(
    (store) => store.movies.isMovieResultsLoading
  );

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");

  if (!searchQuery) return;

  if (isGPT_SearchResultsLoading || isMovieResultsLoading) {
    return <MovieCard_Shimmer />;
  }

  if (!TMDB_Movie_SearchResult.length && searchQuery) return <NoResultFound />;

  return (
    <div className="flex text-white p-11 flex-col bg-black">
      <h1 className="text-xl font-semibold">
        {languageTranslations[currentLang]?.movieSearchResult}
      </h1>
      <div className="flex mt-10 flex-wrap">
        {TMDB_Movie_SearchResult.map((movie) => (
          <div key={movie.id} className="flex mt-3 mb-6 mr-3 flex-col">
            <MovieCard movie={movie} />
            {MOVIE_LANGUAGES[movie?.original_language] && (
              <p className="-mt-4">
                ({MOVIE_LANGUAGES[movie?.original_language]})
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchResult;
