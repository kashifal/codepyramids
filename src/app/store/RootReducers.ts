import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";

const rootReducers = combineReducers({
  AuthSlice,
});

export default rootReducers;
