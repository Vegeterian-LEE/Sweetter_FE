import { configureStore } from "@reduxjs/toolkit";
import users from "../modules/usersSlice";
import sweets from "../modules/sweetSlice";

const store = configureStore({
  reducer: {
    users,
    sweets,
  },
});

export default store;
