import React from "react";

const Adult = ({ adult }) => {
  return (
    <div className="my-8">
      <p className="text-white text-md font-bold">Adult</p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{adult ? "Yes" : "No"}</span>
      </div>
    </div>
  );
};

export default Adult;
