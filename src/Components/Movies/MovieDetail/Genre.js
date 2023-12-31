import React, { Fragment } from "react";

const Genre = ({ genres }) => {
  if (!genres.length) return;

  return (
    <div>
      {genres.map((genre, index, arr) => (
        <Fragment key={genre.id}>
          <span className="text-white underline">{genre.name}</span>
          <span
            className={
              "px-4 text-[10px] " + (arr.length - 1 === index ? "hidden" : "")
            }
          >
            ⚪
          </span>
        </Fragment>
      ))}
    </div>
  );
};

export default Genre;
