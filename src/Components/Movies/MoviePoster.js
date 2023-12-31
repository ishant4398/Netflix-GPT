import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../Utils/constants";

const MoviePoster = () => {
  const movieDetails = useSelector((store) => store.movies?.movieDetails);

  if (!movieDetails) return;

  const { title, poster_path } = movieDetails;

  return (
    <div className="w-screen">
      <img
        className="w-screen aspect-video absolute"
        src={IMG_CDN_URL + poster_path}
        alt={title}
      ></img>
    </div>
  );
};

export default MoviePoster;
