import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state) => {
      return null;
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;
export default userSlice.reducer;