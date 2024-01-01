import React, { Fragment } from "react";
import languageTranslations from "../../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../../Utils/Hooks/useGetCurrentLanguage";

const ProductionCompanies = ({ production_companies }) => {
  const currentLang = useGetCurrentLanguage();

  if (!production_companies?.length) return;

  return (
    <>
      <p className="text-white text-md font-bold">
        {languageTranslations[currentLang].productionCompaniesHeading}
      </p>
      <div className="text-[#aaa] font-[500] mt-2">
        {production_companies.map((company) => (
          <Fragment key={company.id}>
            <span>{company.name}</span>
            <span className="pr-1 last:hidden">,</span>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default ProductionCompanies;
