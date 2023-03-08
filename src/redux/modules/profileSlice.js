import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sweetInstance } from "../../utils/axios";

// State
const initialState = {
  sweetLists: [],
  sweetandCommentLists: [],
  mediaLists: [],
  likeLists: [],
  isLoading: false,
  isError: false,
};

// Get SweetLists
export const __getSweet = createAsyncThunk(
  "upload",
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
export const __getSweetsComments = createAsyncThunk(
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

// Get Media Lists
export const __getMedia = createAsyncThunk(
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

//Get Like Lists
export const __getLike = createAsyncThunk(
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
  },
});

export default profileSlice.reducer;
