import React from "react";
import InputSearch from "../input-search";
import SelectInput from "../select-input";
import MenuItem from "@mui/material/MenuItem";
import { Container, Label, CountryCount, ColStart, ColEnd } from "./style";
import {
  filterCountryByName,
  filterCountryByRegion,
  sortCountry,
} from "../../store/slices/country";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Search = ({ count }) => {
  const { t } = useTranslation();
  const { searchText, sortType, filterCountry } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  const handleFilterCountryByRegion = (e) => {
    const value = e.target.value;
    dispatch(filterCountryByRegion(value));
  };

  const handleFilterSortCountry = (e) => {
    const value = e.target.value;
    dispatch(sortCountry(value));
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    dispatch(filterCountryByName(value));
  };

  return (
    <Container>
      <ColStart>
        <Label>{t("global.countryList")}</Label>
        <CountryCount>({count} {t("global.item")})</CountryCount>
      </ColStart>
      <ColEnd>
        <SelectInput
          width={139}
          onChange={handleFilterCountryByRegion}
          value={filterCountry}
        >
          <MenuItem value="">
            <em>{t("global.selectContinent")}</em>
          </MenuItem>
          <MenuItem value={"Americas"}>{t("global.americas")}</MenuItem>
          <MenuItem value={"Asia"}>{t("global.asia")}</MenuItem>
          <MenuItem value={"Africa"}>{t("global.africa")}</MenuItem>
          <MenuItem value={"Europe"}>{t("global.europe")}</MenuItem>
          <MenuItem value={"Oceania"}>{t("global.oceania")}</MenuItem>
        </SelectInput>
        <SelectInput
          onChange={handleFilterSortCountry}
          value={sortType}
          width={185}
        >
          <MenuItem value="">
            <em>{t("global.orderBy")}</em>
          </MenuItem>
          <MenuItem value={"population-ask"}>{t("global.population-ask")}</MenuItem>
          <MenuItem value={"population-desc"}>{t("global.population-desc")}</MenuItem>
          <MenuItem value={"name-ask"}>{t("global.name-ask")}</MenuItem>
        </SelectInput>
        <InputSearch
          onChange={handleSearchInput}
          value={searchText}
          width={272}
          
        />
      </ColEnd>
    </Container>
  );
};

export default Search;
