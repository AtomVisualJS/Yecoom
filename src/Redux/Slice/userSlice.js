import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../Utils/client/GetUsers";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
  },
  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
