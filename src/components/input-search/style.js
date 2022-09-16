import styled from "styled-components";
import { withTheme } from "@mui/styles";

export const Container = withTheme(styled.header`
  background-color: white;
  padding: 24px 0;
`);

export const Row = withTheme(styled.div`
  width: 100%;
`);

export const Label = withTheme(styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #354752;
`);

export const CountryCount = withTheme(styled(Label)`
  color: #8798a1;
  margin-inline-start: 4px;
`);
