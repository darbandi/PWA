import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CountryDataService from "../services/country.service";

const initialState = {
  countries: [],
  country: {},
  isLoading: false,
  error: false,
  selected: [],
  searchText: "",
  sortType: "",
  filterCountry: "",
};
export const getCountry = createAsyncThunk("country/get", async (cioc) => {
  const res = await CountryDataService.get(cioc);
  return res.data[0];
});

export const getAllCountry = createAsyncThunk("allCountry/get", async () => {
  const res = await CountryDataService.getAll();
  return res.data;
});

export const filterCountryByRegion = createAsyncThunk(
  "country/filter",
  async (region) => {
    const res =
      region === ""
        ? await CountryDataService.getAll()
        : await CountryDataService.filterByRegion(region);
    return res.data;
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    onSelect: (state, action) => {
      state.selected.push(action.payload);
    },
    onDelete: (state, action) => {
      state.selected = state.selected.filter((x) => x.cioc !== action.payload);
    },
    filterCountryByName: (state, action) => {
      state.searchText = action.payload;
    },
    sortCountry: (state, action) => {
      state.sortType = action.payload;
    },
  },
  extraReducers: {
    [getAllCountry.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCountry.fulfilled]: (state, action) => {
      state.countries = [...action.payload];
      state.isLoading = false;
      state.error = false;
    },
    [getAllCountry.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [getCountry.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountry.fulfilled]: (state, action) => {
      state.country = { ...action.payload };
      state.isLoading = false;
      state.error = false;
    },
    [getCountry.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [filterCountryByRegion.pending]: (state) => {
      state.isLoading = true;
    },
    [filterCountryByRegion.fulfilled]: (state, action) => {
      state.countries = [...action.payload];
      state.isLoading = false;
      state.error = false;
      state.filterCountry = action.meta.arg;
    },
    [filterCountryByRegion.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export const { onSelect, onDelete, filterCountryByName, sortCountry } =
  countrySlice.actions;

const { reducer } = countrySlice;
export default reducer;
