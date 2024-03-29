import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";
import { fetchGPT_SearchResults } from "../../Utils/thunks";
import { useNavigate } from "react-router";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";
import useGetTMDBSearchResults from "../../Utils/Hooks/useGetTMDBSearchResults";

const SearchForm = () => {
  const [showExample, setShowExample] = useState(false);
  const [shouldCallSearchAPI, setShouldCallSearchAPI] = useState(true);

  const currentLang = useGetCurrentLanguage();
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useGetTMDBSearchResults(searchInputRef);

  useEffect(() => {
    setShowExample(true);
  }, []);

  const getGPTSearchResults = async () => {
    const searchQuery = searchInputRef.current.value.trim();
    navigate("?searchQuery=" + searchQuery);
    const GPT_Query = `Act as a movie recommended system and suggest me movies for the following query: "${searchQuery}". Only give 5 movies as a result and in comma separated format according to the given example ahead. Example: Don,Sholay,Andaz apna apna,Main hoon na,Golmaal`;
    await dispatch(fetchGPT_SearchResults(GPT_Query));
  };

  const handleSearchClick = async () => {
    const searchValue = searchInputRef.current.value.trim();
    if (searchValue) {
      setShowExample(false);
      if (shouldCallSearchAPI) {
        setShouldCallSearchAPI(false);
        await getGPTSearchResults();
        setTimeout(() => {
          setShouldCallSearchAPI(true);
        }, 500);
      }
    }
  };

  return (
    <>
      <form
        className="flex justify-center bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-12 w-[75%] md:w-[55%] mt-28 h-11">
          <input
            ref={searchInputRef}
            className="col-span-8 md:col-span-10 p-2 px-4 rounded-md"
            type="text"
            placeholder={
              languageTranslations[currentLang]?.gptSearchPlaceholderValue
            }
          ></input>
          <button
            // className="col-span-4 md:col-span-2 p-2 mx-4 bg-red-700 text-white font-semibold rounded-md"
            className="col-span-4 md:col-span-2 p-2 mx-4 bg-red-700 text-white font-semibold rounded-md disabled:opacity-50"
            disabled={!shouldCallSearchAPI}
            onClick={handleSearchClick}
          >
            {languageTranslations[currentLang]?.gptSearchButton}
          </button>
        </div>
      </form>
      {showExample && (
        <p className="text-gray-500 mt-1 font-semibold italic ml-[13%] md:ml-[22.5%]">
          Example: Suggest me some old horror comedy movies in hindi
        </p>
      )}
    </>
  );
};

export default SearchForm;
