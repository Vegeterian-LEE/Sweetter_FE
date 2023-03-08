import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sweetInstance } from "../../utils/axios";

// State
const initialState = {
  imageURl: [],
  allPostResponse: [],
  followPostResponse: [],
  DetailPost: {},
  userLists: [],
  isLoading: false,
  isError: false,
  commentList: [],
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
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Posting Sweet

export const __uploadSweet = createAsyncThunk(
  "uploadPost",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.post("/post", payload);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      console.log(error);
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

// Get Sweet Post Detail

export const __getPostDetail = createAsyncThunk(
  "getPostDetail",
  async (postId, thunkAPI) => {
    try {
      const response = await sweetInstance.get(`/post/${postId}`);
      console.log(response);
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

// UserList
export const __getUserList = createAsyncThunk(
  "getUserLists",
  async (_, thunkAPI) => {
    try {
      const response = await sweetInstance.get("/user/list");
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Search User
export const __searchUser = createAsyncThunk(
  "searchUser",
  async (searchWord, thunkAPI) => {
    try {
      const response = await sweetInstance.get(`/user/search/${searchWord}`);
      return thunkAPI.fulfillWithValue(response.data.data);
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
        state.isLoading = false;
        state.isError = false;
        state.imageURl = action.payload;
      })
      .addCase(__uploadImage.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__uploadSweet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__uploadSweet.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__uploadSweet.rejected, (state) => {
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
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__getPostDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPostDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.DetailPost = action.payload;
        state.commentList = action.payload.commentList;
      })
      .addCase(__getPostDetail.rejected, (state) => {
        state.isLoading = false;
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
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__getUserList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getUserList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userLists = action.payload;
      })
      .addCase(__getUserList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__searchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__searchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userLists = action.payload;
      })
      .addCase(__searchUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default sweetSlice.reducer;
