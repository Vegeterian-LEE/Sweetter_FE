import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sweetInstance } from "../../utils/axios";

// State
const initialState = {
  imageURl: [],
  allPostResponse: [],
  followPostResponse: [],
  isLoading: false,
  isError: false,
};

// image upload
export const __uploadImage = createAsyncThunk(
  "upload",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.post("/upload", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("image upload response ->", response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Get Sweet Post
export const __getPostHome = createAsyncThunk(
  "getPost",
  async (_, thunkAPI) => {
    try {
      const response = await sweetInstance.get("/home");
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Delete Sweet Post
export const __deletePost = createAsyncThunk(
  "deletePost",
  async (postid, thunkAPI) => {
    try {
      const response = await sweetInstance.get(`/post${postid}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sweetSlice = createSlice({
  name: "sweets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__uploadImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__uploadImage.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.imageURl = action.payload;
        console.log("state image -> ", state.imageURl);
      })
      .addCase(__uploadImage.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__getPostHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPostHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allPostResponse = action.payload.allPostResponse;
      })
      .addCase(__getPostHome.rejected, (state) => {
        state.isError = true;
      });

    builder
      .addCase(__deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log("deletePostState ->", state);
        console.log("deletePostAction ->", action);
      })
      .addCase(__deletePost.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default sweetSlice.reducer;
