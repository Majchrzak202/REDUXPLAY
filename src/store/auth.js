import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: { isAuthenticated: false },
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

  export default authenticationSlice;