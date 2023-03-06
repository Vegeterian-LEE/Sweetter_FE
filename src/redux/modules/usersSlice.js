import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersInstance } from "../../utils/axios";
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

      const userInfo = response.data.data;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // const expiryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
      Cookies.set("accessJWTToken", Token);

      usersInstance.defaults.headers.common["Authorization"] = Token;

      return { token: Token };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//개별 유저 정보 갖고오기
export const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return userInfo;
};

const initialState = {
  users: [],
  message: "",
  token: "",
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
  },
});

export default usersSlice.reducer;
