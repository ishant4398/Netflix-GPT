import React from "react";
import { convertDateFormat } from "../../../Utils/helper";

const ReleasedDate = ({ release_date }) => {
  if (!release_date) return;

  const releasedDate = convertDateFormat(release_date);

  return (
    <div className="my-8">
      <p className="text-white text-md font-bold">Released Date</p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{releasedDate}</span>
      </div>
    </div>
  );
};

export default ReleasedDate;
