import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sweetInstance, usersInstance } from "../../utils/axios";
import Cookies from "js-cookie";

//회원가입
export const __addUser = createAsyncThunk("login/signup", async (newUser) => {
  const response = await usersInstance.post("/api/user/signup", newUser);
  console.log(response);
  return newUser;
});

//로그인
export const __loginUser = createAsyncThunk(
  "login/login",
  async (loginUser) => {
    try {
      const response = await usersInstance.post("/api/user/login", loginUser);
      const Token = response.headers.authorization;

      // const expiryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
      Cookies.set("accessJWTToken", Token);

      usersInstance.defaults.headers.common["Authorization"] = Token;

      return { token: Token };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// 유저 정보 가져오기
export const __getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (_, thunkAPI) => {
    try {
      const response = await sweetInstance.get("/user/info");
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// 유저 정보 수정
export const __editUserInfo = createAsyncThunk(
  "editUserInfo",
  async (payload, thunkAPI) => {
    try {
      const response = await sweetInstance.put(
        "/user/settings/profile",
        payload
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  message: "",
  token: "",
  userInfo: {},
  isCheck: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(__loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isCheck = true;
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.message = action.error.message;
      });

    builder
      .addCase(__getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(__getUserInfo.rejected, (state) => {
        state.isCheck = false;
      });

    builder
      .addCase(__editUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(__editUserInfo, (state) => {
        state.isCheck = false;
      });
  },
});

export default usersSlice.reducer;
