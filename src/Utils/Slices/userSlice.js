import { createSlice } from "@reduxjs/toolkit";
import { signIn_Thunk } from "../thunks";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(signIn_Thunk.fulfilled, (state, action) => {
  //     console.log(action);
  //     return action.payload;
  //   });
  // },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
