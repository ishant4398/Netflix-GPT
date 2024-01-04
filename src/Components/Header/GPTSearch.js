import React from "react";
import { useNavigate } from "react-router-dom";
import languageTranslations from "../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const GPTSearch = () => {
  const currentLang = useGetCurrentLanguage();

  const navigate = useNavigate();

  const handleNavToSearch = () => {
    navigate("/search");
  };

  return (
    <button
      className="text-white font-bold h-9 p-2 m-4 my-0 mr-6 pt-1"
      onClick={handleNavToSearch}
    >
      🔍 {languageTranslations[currentLang].gptSearchButtonText}
    </button>
  );
};

export default GPTSearch;
