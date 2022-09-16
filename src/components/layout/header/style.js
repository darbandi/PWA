import styled from "styled-components";
import { withTheme } from "@mui/styles";
import Button from "@mui/material/Button";

export const Container = withTheme(styled.header`
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.color.header.borderColor};
  background-color: ${({ theme }) => theme.color.header.background};
  width: 100%;
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
`);

export const Main = withTheme(styled.div`
  margin: 0 auto;
  width: 1128px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`);

export const Logo = withTheme(styled.div`
  background: #f4f7fb;
  border-radius: 8px;
  width: 64px;
  height: 64px;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  color: #c8d3d9;
  display: flex;
  align-items: center;
  justify-content: center;
`);

export const LeftSection = withTheme(styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`);

export const Buttons = withTheme(styled(Button)`
  width: fit-content;
  height: 40px;
  box-shadow: none !important;
  border-radius: 8px !important;
  font-weight: 300 !important;
  font-size: 14px !important;
  background: #f4f7fb !important;
  color: #354752 !important;
`);

export const ThemeButton = withTheme(styled(Buttons)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`);

export const SelectedCountries = withTheme(styled(Buttons)``);
