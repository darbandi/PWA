import styled from "styled-components";
import { withTheme } from "@mui/styles";
import Button from "@mui/material/Button";

export const Conatiner = withTheme(styled.div`
  background-color: ${({ theme }) => theme.color.card.background};
  border-radius: 8px;
  width: 262px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`);

export const Flag = withTheme(styled.img`
  width: 146px;
  height: 146px;
  border-radius: 50%;
  background-color: #c8d3d9;
`);

export const Title = withTheme(styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin: 24px 0;
  color: ${({ theme }) => theme.color.card.title} !important; 
`);

export const Row = withTheme(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`);

export const Col = withTheme(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`);

export const Label = withTheme(styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.card.info}; 
`);

export const Actions = withTheme(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 24px;
`);

export const Buttons = withTheme(styled(Button)`
  width: 100px;
  height: 40px;
  box-shadow: none !important;
  border-radius: 8px !important;
  font-weight: 300 !important;
  font-size: 14px !important;
`);

export const ButtonView = withTheme(styled(Buttons)`
  color: ${({ theme }) => theme.color.body.color} !important;  
  background-color: ${({ theme }) => theme.color.main.background} !important;
`);

export const ButtonDelete = withTheme(styled(Buttons)`
  color: white !important;
  background-color: #bb2e47 !important;
`);

export const ButtonSelect = withTheme(styled(Buttons)`
  color: white !important;
  background-color: #d56c0c !important;
`);
