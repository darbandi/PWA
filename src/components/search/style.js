import styled from "styled-components";
import { withTheme } from "@mui/styles";

export const Container = withTheme(styled.header`
  background-color: ${({ theme }) => theme.color.body.background};
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.color.input.background} !important;
    color: ${({ theme }) => theme.color.input.color} !important;
  }
`);

export const ColStart = withTheme(styled.div`
  width: 100%;
`);

export const ColEnd = withTheme(styled(ColStart)`
  display: flex;
  justify-content: end;
`);

export const Label = withTheme(styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: ${({ theme }) => theme.color.search.title};
`);

export const CountryCount = withTheme(styled(Label)`
  color: ${({ theme }) => theme.color.search.counter};
  margin-inline-start: 8px;
`);
