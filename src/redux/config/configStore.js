import { configureStore } from "@reduxjs/toolkit";
import users from "../modules/usersSlice";
import sweets from "../modules/sweetSlice";
import comments from "../modules/commentsSlice";

const store = configureStore({
  reducer: {
    users,
    sweets,
    comments,
  },
});

export default store;
