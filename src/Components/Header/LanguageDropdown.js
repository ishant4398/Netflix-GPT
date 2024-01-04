import React from "react";
import { LANGUAGES } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { updateCurrentLang } from "../../Utils/Slices/configSlice";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";
import useGetCurrentUser from "../../Utils/Hooks/useGetCurrentUser";

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const currentLang = useGetCurrentLanguage();
  const user = useGetCurrentUser();

  const handleChangeLanguage = (e) => {
    dispatch(updateCurrentLang(e.target.value));

    const userId = user?.uid;
    if (userId) {
      localStorage.setItem(`currLanguage_${userId}`, e.target.value);
    }
  };

  return (
    <select
      className="text-white font-bold h-9 p-2 m-4 my-0 mr-6 pt-1 bg-transparent"
      placeholder="Select Language"
      value={currentLang}
      onChange={handleChangeLanguage}
    >
      {LANGUAGES.map((language) => (
        <option key={language.key} value={language.key} className="bg-gray-800">
          {language.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageDropdown;
