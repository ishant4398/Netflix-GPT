import React, { Fragment } from "react";

const ProductionCompanies = ({ production_companies }) => {
  if (!production_companies.length) return;

  return (
    <div className="my-8">
      <p className="text-white text-md font-bold">Production Companies</p>
      <div className="text-[#aaa] font-[500] mt-2">
        {production_companies.map((company) => (
          <Fragment key={company.id}>
            <span>{company.name}</span>
            <span className="pr-1 last:hidden">,</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductionCompanies;
