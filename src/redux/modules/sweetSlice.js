import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sweetInstance } from "../../utils/axios";

// State
const initialState = {
  imageURl: [],
  category: "",
  allPostResponse: [],
  followPostResponse: [],
  DetailPost: {},
  userLists: [],
  isLoading: false,
  isError: false,
  commentList: [],
  bookMarkList: [],
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
      const response = await sweetInstance.delete(`/post${postid}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Like Sweet Post

export const __likePost = createAsyncThunk("likePost", async (id, thunkAPI) => {
  try {
    const response = await sweetInstance.post(`/post/like/${id}`);
    console.log(response);
    return thunkAPI.fulfillWithValue(response.data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Retweet Sweet Post

export const __retweetPost = createAsyncThunk(
  "retweetPost",
  async (id, thunkAPI) => {
    try {
      const response = await sweetInstance.post(`/retweet/${id}`);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Bookmark Sweet Post

export const __addBookMark = createAsyncThunk(
  "addBookMark",
  async (id, thunkAPI) => {
    try {
      const response = await sweetInstance.post(`/mark/toggle/${id}`);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Get Bookmark

export const __getBookMark = createAsyncThunk(
  "getBookMark",
  async (_, thunkAPI) => {
    try {
      const response = await sweetInstance.get("/bookmarks");
      return thunkAPI.fulfillWithValue(response.data.data);
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

// Follow User
export const __followUser = createAsyncThunk(
  "followUser",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.post(`/follow/${payload}`);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Unfollow User
export const __unFollowUser = createAsyncThunk(
  "unFollowUser",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.delete(`/follow/${payload}`);
      console.log(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sweetSlice = createSlice({
  name: "sweets",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      state.category = action.payload;
    },
  },
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
      .addCase(__likePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__likePost.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__likePost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__retweetPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__retweetPost.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__retweetPost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__addBookMark.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__addBookMark.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__addBookMark.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__getBookMark.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getBookMark.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.bookMarkList = action.payload;
      })
      .addCase(__getBookMark.rejected, (state) => {
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

    builder
      .addCase(__followUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__followUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { toggleCategory } = sweetSlice.actions;
export default sweetSlice.reducer;
