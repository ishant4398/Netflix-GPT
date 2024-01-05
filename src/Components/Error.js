import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import useGetCurrentLanguage from "../Utils/Hooks/useGetCurrentLanguage";
import languageTranslations from "../Utils/languageTranslations";

const Error = () => {
  const currentLang = useGetCurrentLanguage();
  const error = useRouteError();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="p-8 bg-black h-screen text-white">
      <h1 className="text-2xl font-bold">Error</h1>
      <h1 className="my-1 py-1">{error.status}</h1>
      <h1>{error.data}</h1>
      <button
        className="px-3 my-4 w-32 h-10 bg-white text-black rounded-md hover:bg-opacity-80 font-semibold"
        onClick={handleBack}
      >
        {languageTranslations[currentLang].back}
      </button>
    </div>
  );
};

export default Error;
