import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    addToUsers: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.data));
    },
  },
});

export const { addToUsers } = usersSlice.actions;
export default usersSlice.reducer;
