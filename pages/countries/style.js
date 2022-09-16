import styled from "styled-components";
import { withTheme } from "@mui/styles";

export const Container = withTheme(styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.color.main.background};
  padding: 16px;
  border-radius: 8px;
`);
