import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sweetInstance } from "../../utils/axios";

// State
const initialState = {
  sweetLists: [],
  reSweetandCommentLists: [],
  mediaLists: [],
  likeLists: [],
  isLoading: false,
  isError: false,
};

// Get SweetLists
export const __getSweet = createAsyncThunk(
  "getSweetLists",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.get(`/tweetlist/${payload}`);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Get SweetLists and Comment Lists
export const __getReSweetsComments = createAsyncThunk(
  "getReSweetLists",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.get(
        `/tweetlistAndCommenttweet/${payload}`
      );
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Get Media Lists
export const __getMedia = createAsyncThunk(
  "getMediaLists",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.get(`/medialist/${payload}`);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Get Like Lists
export const __getLike = createAsyncThunk(
  "getLikeLists",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.get(`/likelist/${payload}`);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getSweet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getSweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.sweetLists = action.payload;
      })
      .addCase(__getSweet.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__getReSweetsComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getReSweetsComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.reSweetandCommentLists = action.payload;
      })
      .addCase(__getReSweetsComments.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__getMedia.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getMedia.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.mediaLists = action.payload;
      })
      .addCase(__getMedia.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(__getLike.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.likeLists = action.payload;
      })
      .addCase(__getLike.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default profileSlice.reducer;
