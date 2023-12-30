import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageTranslations from "../../Utils/languageTranslations";
import {
  fetchGPT_SearchResults,
  fetchMovieSearchResults,
} from "../../Utils/thunks";
import { useNavigate } from "react-router";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const SearchForm = () => {
  const currentLang = useGetCurrentLanguage();
  const GPT_Search_Results = useSelector((store) => store.gpt.searchResults);
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTMDBSearchResult = async (TMDB_SearchQuery) => {
    // TMDB_SearchQuery = ['Andaz Apna Apna', 'Chupke Chupke', 'Golmaal', 'Padosan', 'Chashme Buddoor']

    await dispatch(fetchMovieSearchResults(TMDB_SearchQuery));
  };

  const getGPTSearchResults = async () => {
    const searchQuery = searchInputRef.current.value.trim();
    const GPT_Query = `Act as a movie recommended system and suggest me movies for the following query: "${searchQuery}". Only give 5 movies as a result and in comma separated format according to the given example ahead. Example: Don,Sholay,Andaz apna apna,Main hoon na,Golmaal`;
    await dispatch(fetchGPT_SearchResults(GPT_Query)); // API Not working due to failed purchase plan.
  };

  const handleSearchClick = async () => {
    const searchValue = searchInputRef.current.value.trim();
    if (searchValue) {
      navigate("?searchQuery=" + searchValue);
      await getGPTSearchResults(); // API Not working due to failed purchase plan.

      // If result from GPT API exists then fetch data according to it otherwise fetch data only according to user input not on the basis of GPT result.
      let TMDB_SearchQuery;

      if (GPT_Search_Results.length) {
        TMDB_SearchQuery = GPT_Search_Results;
      } else {
        TMDB_SearchQuery = searchValue.split();
      }

      await getTMDBSearchResult(TMDB_SearchQuery);
    }
  };

  return (
    <form
      className="flex justify-center bg-black"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-12 w-[55%] mt-28 h-11">
        <input
          ref={searchInputRef}
          className="col-span-10 p-2 px-4 rounded-md"
          type="text"
          placeholder={
            languageTranslations[currentLang]?.gptSearchPlaceholderValue
          }
        ></input>
        <button
          className="col-span-2 p-2 mx-4 bg-red-700 text-white font-semibold rounded-md"
          onClick={handleSearchClick}
        >
          {languageTranslations[currentLang]?.gptSearchButton}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
