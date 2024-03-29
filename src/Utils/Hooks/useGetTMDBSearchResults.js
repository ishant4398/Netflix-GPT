import { useDispatch, useSelector } from "react-redux";
import { checkForUnwantedTerms } from "../helper";
import { useEffect } from "react";
import { fetchMovieSearchResults } from "../thunks";

const useGetTMDBSearchResults = (searchInputRef) => {
  const GPT_Search_Results = useSelector((store) => store.gpt.searchResults);
  const dispatch = useDispatch();

  const searchValue = searchInputRef?.current?.value?.trim();

  useEffect(() => {
    if (searchValue) {
      let TMDB_SearchQuery = "";
      // Check if GPT_Search_Results contains unwanted terms
      const hasUnwantedTerms = checkForUnwantedTerms(GPT_Search_Results);

      if (!hasUnwantedTerms && GPT_Search_Results.length) {
        TMDB_SearchQuery = GPT_Search_Results;
      } else {
        TMDB_SearchQuery = searchValue.split();
      }

      getTMDBSearchResult(TMDB_SearchQuery);
    }
  }, [GPT_Search_Results, searchValue]);

  // TMDB_SearchQuery = ['Andaz Apna Apna', 'Chupke Chupke', 'Golmaal', 'Padosan', 'Chashme Buddoor']
  const getTMDBSearchResult = async (TMDB_SearchQuery) => {
    await dispatch(fetchMovieSearchResults(TMDB_SearchQuery));
  };
};

export default useGetTMDBSearchResults;
