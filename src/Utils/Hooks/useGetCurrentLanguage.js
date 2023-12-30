import { useSelector } from "react-redux";

const useGetCurrentLanguage = () => {
  const currentLang = useSelector((store) => store.config.currentLang);
  return currentLang;
};

export default useGetCurrentLanguage;
