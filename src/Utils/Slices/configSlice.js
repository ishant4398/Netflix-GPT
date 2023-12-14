import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    currentLang: "en",
  },
  reducers: {
    updateCurrentLang: (state, action) => {
      state.currentLang = action.payload;
    },
  },
});

export const { updateCurrentLang } = configSlice.actions;
export default configSlice.reducer;
