import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authenticationSlice from './auth'


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export const authActions = authenticationSlice.actions;
export const actionCounter = counterSlice.actions;
export default store;
