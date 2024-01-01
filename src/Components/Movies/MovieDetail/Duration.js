import React from "react";
import { formatRuntime } from "../../../Utils/helper";

const Duration = ({ duration }) => {
  if (!duration) return;

  const durationOfMovie = formatRuntime(duration);

  return (
    <>
      <p className="text-white text-md font-bold">Duration</p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{durationOfMovie}</span>
      </div>
    </>
  );
};

export default Duration;
