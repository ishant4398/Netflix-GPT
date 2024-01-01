import React, { Fragment } from "react";
import useGetCurrentLanguage from "../../../Utils/Hooks/useGetCurrentLanguage";
import languageTranslations from "../../../Utils/languageTranslations";

const ProductionCountries = ({ production_countries }) => {
  const currentLang = useGetCurrentLanguage();

  if (!production_countries?.length) return;

  return (
    <>
      <p className="text-white text-md font-bold">
        {languageTranslations[currentLang].productionCountriesHeading}
      </p>
      <div className="text-[#aaa] font-[500] mt-2">
        {production_countries.map((country) => (
          <Fragment key={country.name}>
            <span>{country.name}</span>
            <span className="pr-1 last:hidden">,</span>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default ProductionCountries;
