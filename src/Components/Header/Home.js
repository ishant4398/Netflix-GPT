import React from "react";
import { useNavigate } from "react-router-dom";
import languageTranslations from "../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const Home = () => {
  const currentLang = useGetCurrentLanguage();
  const navigate = useNavigate();

  const handleNavToBrowse = () => {
    navigate("/browse");
  };

  return (
    <button
      className="text-white font-bold h-9 p-2 m-4 my-0 mr-6 pt-1"
      onClick={handleNavToBrowse}
    >
      {languageTranslations[currentLang].home}
    </button>
  );
};

export default Home;
