import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LoginDataService from "../services/login.service";

const initialState = {
  isLogin: false,
};

export const getLogin = createAsyncThunk("auth/login", async (value) => {
  const { email, password } = value;
  const res = await LoginDataService.login(email, password);
  return res.data.token;
});

export const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: {
    [getLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [getLogin.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [getLogin.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const { login, logout } = authReducer.actions;

const { reducer } = authReducer;
export default reducer;
