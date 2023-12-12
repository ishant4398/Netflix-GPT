import React, { useEffect } from "react";
import MovieTrailer from "./Movies/MovieTrailer";
import MovieSuggestions from "./Movies/MovieSuggestions";
import { useDispatch } from "react-redux";
import { setBannerFalse } from "../Utils/Slices/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBannerFalse());
  }, []);

  return (
    <div className="flex flex-col bg-black">
      <MovieTrailer />
      <MovieSuggestions />
    </div>
  );
};

export default Browse;
