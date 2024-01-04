import React from "react";
import { useSelector } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";
import MovieCard from "../Movies/MovieCard";
import { MOVIE_LANGUAGES } from "../../Utils/constants";
import MovieCard_Shimmer from "../Shimmer/MovieCard_Shimmer";
import NoResultFound from "./NoResultFound";
import { useSearchParams } from "react-router-dom";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";
import Message from "../Message";

const MovieSearchResult = () => {
  const currentLang = useGetCurrentLanguage();

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

  if (!TMDB_Movie_SearchResult.length && searchQuery)
    return (
      <Message
        message={languageTranslations[currentLang]?.noSearchResultFound}
      />
    );

  return (
    <div className="flex text-white p-11 flex-col bg-black">
      <h1 className="text-xl font-semibold">
        {languageTranslations[currentLang]?.movieSearchResult}
      </h1>
      <div className="flex mt-10 flex-wrap">
        {TMDB_Movie_SearchResult.map(
          (movie) =>
            movie.poster_path && (
              <div key={movie.id} className="flex mt-3 mb-6 mr-3 flex-col">
                <MovieCard movie={movie} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MovieSearchResult;
