import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Slices/usersSlice";

const store = configureStore({
  reducer: { user: usersReducer },
});

store.subscribe(() => {
  console.log("USERS ", store.getState());
});

export default store;
