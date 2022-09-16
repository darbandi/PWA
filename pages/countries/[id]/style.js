import styled from "styled-components";
import { withTheme } from "@mui/styles";
import Button from "@mui/material/Button";

export const Conatiner = withTheme(styled.div`
  background: #f4f7fb;
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`);

export const Flag = withTheme(styled.img`
  width: 146px;
  height: 146px;
  border-radius: 50%;
  background-color: #c8d3d9;
`);

export const Title = withTheme(styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 24px;
  color: #354752;
  margin-top: 0;
`);

export const Row = withTheme(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  padding: 16px;
`);

export const Item = withTheme(styled(Row)`
  padding: 0;
  padding-bottom: 8px;
`);

export const Details = withTheme(styled(Row)`
  margin-top: 10px;
  padding: 24px;
  gap: 24px;
  align-items: start;
`);

export const Col = withTheme(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`);

export const RightSection = withTheme(styled(Col)`
  flex: 1;
`);

export const LeftSection = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`);

export const Detail = withTheme(styled(Col)`
  width: 100%;
  align-items: start;
  gap: 100px;
  justify-content: unset;
`);

export const Info = withTheme(styled(Col)`
  flex-direction: column;
  width: 30%;
`);

export const Label = withTheme(styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #607079;
`);

export const Value = withTheme(styled(Label)`
  font-weight: 400;
  color: #354752;
`);

export const Buttons = withTheme(styled(Button)`
  width: 120px;
  height: 40px;
  box-shadow: none !important;
  border-radius: 8px !important;
  font-weight: 300 !important;
  font-size: 14px !important;
`);

export const ButtonBack = withTheme(styled(Buttons)`
  color: #354752 !important;
  background-color: white !important;
  border: 1px solid #c8d3d9 !important;
`);

export const ButtonSelect = withTheme(styled(Buttons)`
  color: white !important;
  background-color: #d56c0c !important;
`);

export const ButtonDelete = withTheme(styled(Buttons)`
  color: white !important;
  background-color: #bb2e47 !important;
`);

export const Seperator = withTheme(styled.hr`
  border: none;
  border-bottom: 1px solid #c8d3d9;
  margin: 24px 0;
`);

export const Tags = withTheme(styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 16px;
  margin-top: 16px;
`);

export const Tag = withTheme(styled.div`
  background: #f1f4f5;
  border-radius: 8px;
  padding: 8px 16px;
`);
