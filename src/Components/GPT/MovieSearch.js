import React, { useEffect } from "react";
import SearchForm from "./SearchForm";
import MovieSearchResult from "./MovieSearchResult";
import { useDispatch } from "react-redux";
import { clearSearchMovieResults } from "../../Utils/Slices/movieSlice";

const MovieSearch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearchMovieResults());
  }, []);

  return (
    <div className="flex flex-col bg-black h-screen">
      <SearchForm />
      <MovieSearchResult />
    </div>
  );
};

export default MovieSearch;
