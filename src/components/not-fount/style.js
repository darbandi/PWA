import styled from "styled-components";
import { withTheme } from "@mui/styles";

export const Conatiner = withTheme(styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`);

export const Circule = withTheme(styled.div`
  width: 216px;
  height: 216px;
  background: #f4f7fb;
  border-radius: 50%;
`);

export const Text = withTheme(styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #607079;
  margin-top: 16px;
`);
