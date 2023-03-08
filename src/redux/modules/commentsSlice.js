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
      const response = await sweetInstance.post(`/comment/${id}`, newComment);
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (id, thunkAPI) => {
    try {
      const response = await sweetInstance.delete(`/comment/${id}`);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __likeComment = createAsyncThunk(
  "likeComment",
  async (id, thunkAPI) => {
    try {
      const response = await sweetInstance.post(`/comment/like/${id}`);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
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

    builder
      .addCase(__deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log("deletePostState ->", state);
        console.log("deletePostAction ->", action);
      })
      .addCase(__deleteComment.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__likeComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__likeComment.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__likeComment.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default commentsSlice.reducer;
