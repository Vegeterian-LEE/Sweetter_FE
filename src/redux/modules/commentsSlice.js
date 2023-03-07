import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentInstance } from "../../utils/axios";

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default commentsSlice.reducer;
