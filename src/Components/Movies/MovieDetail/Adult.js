import React from "react";

const Adult = ({ adult }) => {
  return (
    <>
      <p className="text-white text-md font-bold">Adult</p>
      <div className="text-[#aaa] font-[500] mt-2">
        <span>{adult ? "Yes" : "No"}</span>
      </div>
    </>
  );
};

export default Adult;
