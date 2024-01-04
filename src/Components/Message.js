import React from "react";

const Message = ({ message }) => {
  return (
    <div className="flex text-white p-11 flex-col bg-black justify-center mt-[8%]">
      <h1 className="text-xl font-semibold text-center">{message}</h1>
    </div>
  );
};

export default Message;
