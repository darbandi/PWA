import React from "react";
// import {  } from "./style";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

const InputSearch = ({ value, onChange, width = "25ch" }) => {
  const { t } = useTranslation();
  return (
    <FormControl sx={{ m: 1, width, height: "40px" }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-password"
        type={"text"}
        value={value}
        sx={{ height: "40px", borderRadius: "8px" }}
        placeholder={t("global.search")}
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default InputSearch;
