import styled from "styled-components";
import { withTheme } from "@mui/styles";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export const Container = withTheme(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .MuiInputBase-root {
    border-radius: 8px !important;
  }
`);

export const Header = withTheme(styled.div``);

export const Main = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  margin: 0 auto;
  margin-bottom: 48px;
`);

export const Label = withTheme(styled.div`
  color: #354752;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  margin-bottom: 8px;
`);

export const Description = withTheme(styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #8798a1;
`);

export const SubmitButton = withTheme(styled(Button)`
  width: 328px !important;
  height: 40px !important;
  background: #d56c0c !important;
  border-radius: 8px !important;
`);

export const LoginSocials = withTheme(styled(SubmitButton)`
  background: white !important;
`);

export const Loading = withTheme(styled(LoadingButton)`
  width: 328px !important;
  height: 40px !important;
  background: #d56c0c !important;
  border-radius: 8px !important;
  opacity: 0.5;
`);
