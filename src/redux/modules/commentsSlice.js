import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sweetInstance } from "../../utils/axios";

const initialState = {
  comments: [],
  isLoading: false,
  isError: false,
};

export const __addComment = createAsyncThunk(
  "addComment",
  async ({ id, newComment }, thunkAPI) => {
    try {
      const response = await sweetInstance.post(`comment/${id}`, newComment);
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__addComment.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__addComment.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default commentsSlice.reducer;
