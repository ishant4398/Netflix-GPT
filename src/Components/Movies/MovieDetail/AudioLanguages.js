import React, { Fragment } from "react";

const AudioLanguages = ({ languages }) => {
  if (!languages.length) return;

  return (
    <div className="my-8">
      <p className="text-white text-md font-bold">Audio languages</p>
      <div className="text-[#aaa] font-[500] mt-2">
        {languages.map((language, index, arr) => (
          <Fragment key={language.english_name}>
            <span>{language.english_name}</span>
            <span
              className={" pr-1 " + (arr.length - 1 === index ? "hidden" : "")}
            >
              ,
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AudioLanguages;
