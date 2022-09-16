import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInput = ({
  value,
  onChange,
  children,
  inHeader,
  width = "25ch",
}) => {
  return (
    <FormControl
      sx={{
        m: 1,
        width: width,
        height: "40px",
      }}
      variant="outlined"
    >
      <Select
        value={value}
        displayEmpty
        onChange={onChange}
        sx={{
          height: "40px",
          borderRadius: "8px",
          backgroundColor: inHeader ? "#F4F7FB" : "white",
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
