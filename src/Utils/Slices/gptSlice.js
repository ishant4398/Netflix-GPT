import { createSlice } from "@reduxjs/toolkit";
import { fetchGPT_SearchResults } from "../thunks";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    searchResults: [],
    isGPT_SearchResultsLoading: false,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGPT_SearchResults.pending, (state) => {
        state.isGPT_SearchResultsLoading = true;
      })
      .addCase(fetchGPT_SearchResults.fulfilled, (state, action) => {
        const result = action.payload;
        state.searchResults = result.split(",");
        state.isGPT_SearchResultsLoading = false;
      })
      .addCase(fetchGPT_SearchResults.rejected, (state) => {
        console.error(
          "Error Occured while calling GPT API. Hence, User will not be able to use AI Search feature."
        );
        console.error(
          "Generating result from User input only without using GPT API"
        );
        state.isGPT_SearchResultsLoading = false;
      });
  },
});

export const { toggleGPTSearch } = gptSlice.actions;

export default gptSlice.reducer;
