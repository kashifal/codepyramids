import { createSlice } from "@reduxjs/toolkit";

interface state {
  isLoggedIn: boolean;
  token: string | null;
}

const initialState: state = { isLoggedIn: false, token: "" };
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    Login(state, action) {
      const { token } = action.payload;
      state.isLoggedIn = true;
      state.token = token;
    },
    Logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
