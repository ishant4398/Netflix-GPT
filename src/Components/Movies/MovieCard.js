import React from "react";
import { IMG_CDN_URL } from "../../Utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;

  return (
    <div>
      <img src={IMG_CDN_URL + poster_path} alt={"Movie-Pic"}></img>
    </div>
  );
};

export default MovieCard;
