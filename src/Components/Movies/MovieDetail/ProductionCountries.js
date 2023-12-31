import React, { Fragment } from "react";

const ProductionCountries = ({ production_countries }) => {
  if (!production_countries.length) return;

  return (
    <div className="my-8">
      <p className="text-white text-md font-bold">Production Countries</p>
      <div className="text-[#aaa] font-[500] mt-2">
        {production_countries.map((country, index, arr) => (
          <Fragment key={country.name}>
            <span>{country.name}</span>
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

export default ProductionCountries;
