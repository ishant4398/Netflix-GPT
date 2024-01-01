import React, { useLayoutEffect, useRef, useState } from "react";
import { IMG_CDN_URL } from "../../Utils/constants";
import PopoverMovieCard from "./PopoverMovieCard";

const MovieCard = ({ movie }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const movieCardRef = useRef(null);

  const { poster_path, title } = movie;

  // const handleMouseOver = (e) => {
  //   if (movieCardRef.current && movieCardRef.current.contains(e.target)) {
  //     setIsPopoverOpen(true);
  //   }
  // };

  // const handleMouseOut = (e) => {
  //   if (movieCardRef.current && !movieCardRef.current.contains(e.target)) {
  //     setIsPopoverOpen(false);
  //   }
  // };

  // // Applying Debouncing on mouse over and mouse out events
  // useLayoutEffect(() => {
  //   let timerId_MouseOver;
  //   let timerId_MouseOut;
  //   let delay = 500;

  //   const handleMouseOverTimeout = (e) => {
  //     clearTimeout(timerId_MouseOver);
  //     timerId_MouseOver = setTimeout(() => {
  //       handleMouseOver(e);
  //     }, delay);
  //   };

  //   const handleMouseOutTimeout = (e) => {
  //     clearTimeout(timerId_MouseOut);
  //     timerId_MouseOut = setTimeout(() => {
  //       handleMouseOut(e);
  //     }, 0);
  //   };

  //   document.addEventListener("mouseover", handleMouseOverTimeout);
  //   document.addEventListener("mouseout", handleMouseOutTimeout);

  //   return () => {
  //     document.removeEventListener("mouseover", handleMouseOverTimeout);
  //     document.removeEventListener("mouseout", handleMouseOutTimeout);
  //   };
  // }, [movieCardRef]);

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
