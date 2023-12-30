import React from "react";
import { IMG_CDN_URL } from "../../Utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;

  if (!poster_path) return;

  return (
    <div className="w-64 mr-7 mb-4">
      <img
        className="w-64 h-44 rounded-lg cursor-pointer"
        src={IMG_CDN_URL + poster_path}
        alt={title}
      ></img>
      <p className="pt-3 text-white">{title}</p>
    </div>
  );
};

export default MovieCard;
