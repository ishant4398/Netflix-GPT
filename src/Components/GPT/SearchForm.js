import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";
import {
  fetchGPT_SearchResults,
  fetchMovieSearchResults,
} from "../../Utils/thunks";
import { useNavigate } from "react-router";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const SearchForm = () => {
  const [showExample, setShowExample] = useState(false);
  const [shouldCallSearchAPI, setShouldCallSearchAPI] = useState(true);

  const currentLang = useGetCurrentLanguage();
  const GPT_Search_Results = useSelector((store) => store.gpt.searchResults);
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setShowExample(true);
  }, []);

  useEffect(() => {
    const searchValue = searchInputRef.current.value.trim();

    if (searchValue) {
      let TMDB_SearchQuery = "";

      // Check if GPT_Search_Results contains unwanted terms
      const hasUnwantedTerms = checkForUnwantedTerms(GPT_Search_Results);

      if (!hasUnwantedTerms) {
        TMDB_SearchQuery = GPT_Search_Results;
      } else {
        TMDB_SearchQuery = searchValue.split();
      }

      getTMDBSearchResult(TMDB_SearchQuery);
    }
  }, [GPT_Search_Results]);

  const checkForUnwantedTerms = (GPT_Search_Results) => {
    const unwantedTerms = ["sorry", "apologies", "apologize", "unfortunately"];
    const words = GPT_Search_Results?.join("").toLowerCase().split(" ");

    const hasUnwantedTerms = unwantedTerms.some((word) =>
      words.includes(word.toLowerCase())
    );
    return hasUnwantedTerms;
  };

  // TMDB_SearchQuery = ['Andaz Apna Apna', 'Chupke Chupke', 'Golmaal', 'Padosan', 'Chashme Buddoor']
  const getTMDBSearchResult = async (TMDB_SearchQuery) => {
    await dispatch(fetchMovieSearchResults(TMDB_SearchQuery));
  };

  const getGPTSearchResults = async () => {
    const searchQuery = searchInputRef.current.value.trim();
    const GPT_Query = `Act as a movie recommended system and suggest me movies for the following query: "${searchQuery}". Only give 5 movies as a result and in comma separated format according to the given example ahead. Example: Don,Sholay,Andaz apna apna,Main hoon na,Golmaal`;
    console.log("Search GPT API Call");
    await dispatch(fetchGPT_SearchResults(GPT_Query));
  };

  const handleSearchClick = async () => {
    const searchValue = searchInputRef.current.value.trim();
    if (searchValue) {
      setShowExample(false);
      if (shouldCallSearchAPI) {
        navigate("?searchQuery=" + searchValue);
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
