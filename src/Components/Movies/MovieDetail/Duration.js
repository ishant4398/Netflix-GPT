import React from "react";
import { formatRuntime } from "../../../Utils/helper";

const Duration = ({ duration }) => {
  if (!duration) return;

  const durationOfMovie = formatRuntime(duration);

  return (
    <div className="my-8">
      <p className="text-white text-md font-bold">Duration</p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{durationOfMovie}</span>
      </div>
    </div>
  );
};

export default Duration;
