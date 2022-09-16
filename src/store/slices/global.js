import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "fa",
  theme: "light",
  baseColor: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeLang, changeTheme } = globalSlice.actions;

const { reducer } = globalSlice;
export default reducer;
