import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersInstance } from "../../utils/axios";

export const __addUser = createAsyncThunk("login/signup", async (newUser) => {
  await usersInstance.post("/api/user/signup", newUser);
  return newUser;
});

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
