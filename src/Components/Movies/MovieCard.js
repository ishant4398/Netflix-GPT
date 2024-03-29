import React, { useRef } from "react";
import { IMG_CDN_URL } from "../../Utils/constants";
import PopoverMovieCard from "./PopoverMovieCard";
import usePopoverEvents from "../../Utils/Hooks/usePopoverEvents";

const MovieCard = ({ movie }) => {
  const movieCardRef = useRef(null);

  // Applying Popover, Event Delegation and Debouncing on mouse over and mouse out events
  const isPopoverOpen = usePopoverEvents(movieCardRef);

  const { poster_path, title } = movie;

  if (!poster_path || !title) return;

  return (
    <div className="w-64 mr-7 mb-4 cursor-pointer" ref={movieCardRef}>
      {!isPopoverOpen ? (
        <div>
          <img
            className="w-64 h-44 rounded-lg"
            src={IMG_CDN_URL + poster_path}
            alt={title}
          ></img>
          <p className="pt-3 text-white">{title}</p>
        </div>
      ) : (
        <PopoverMovieCard movie={movie} />
      )}
    </div>
  );
};

export default MovieCard;
