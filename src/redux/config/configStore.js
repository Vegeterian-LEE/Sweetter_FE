import { configureStore } from "@reduxjs/toolkit";
import users from "../modules/usersSlice";
import sweets from "../modules/sweetSlice";
import comments from "../modules/commentsSlice";
import profile from "../modules/profileSlice";

const store = configureStore({
  reducer: {
    users,
    sweets,
    comments,
    profile,
  },
});

export default store;
