import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersInstance } from "../../utils/axios";
import { useCookies } from "react-cookie";

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
      console.log(response);
      const userToken = response.data.token;

      usersInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userToken}`;

      const [setCookie] = useCookies(["accessJWTToken"]);
      setCookie("accessJWTToken", userToken, { path: "/" });

      return { token: userToken };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

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
