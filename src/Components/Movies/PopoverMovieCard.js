import React from "react";
import { IMG_CDN_URL } from "../../Utils/constants";
import ReleasedDate from "./MovieDetail/ReleasedDate";
import Adult from "./MovieDetail/Adult";
import MovieLanguage from "./MovieLanguage";
import { useNavigate } from "react-router-dom";

const PopoverMovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const { id, poster_path, title, adult, release_date, original_language } =
    movie;

  const handleNavToMovieInfo = () => {
    navigate("/movieInfo/" + id);
  };

  return (
    <div className="rounded shadow-md" onClick={handleNavToMovieInfo}>
      <div className="w-[270px] h-auto pb-1 bg-gray-800 rounded-lg">
        <img
          className="w-full h-52 rounded-lg"
          src={IMG_CDN_URL + poster_path}
          alt={title}
        ></img>
        <p className="px-3 pb-1 pt-2 text-white">{title}</p>
        <div className="mx-3 mb-4">
          <MovieLanguage original_language={original_language} />
        </div>
        <div className="my-2 mx-3">
          <Adult adult={adult} />
        </div>
        <div className="my-3 mx-3">
          <ReleasedDate release_date={release_date} />
        </div>
      </div>
    </div>
  );
};

export default PopoverMovieCard;
