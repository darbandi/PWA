import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import SelectInput from "../../select-input";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {
  Container,
  Main,
  Logo,
  LeftSection,
  ThemeButton,
  SelectedCountries,
} from "./style";
import { changeLang, changeTheme } from "../../../store/slices/global";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedCountries = useSelector((state) => state.country.selected);
  const { lang, theme, baseColor } = useSelector((state) => state.global);

  const handleChangeTheme = () =>
    dispatch(changeTheme(theme === "dark" ? "light" : "dark"));

  const handleChangeLanguage = () =>
    dispatch(changeLang(lang === "fa" ? "en" : "fa"));

  const handleClickSelected = () => {
    if (router?.pathname === "/selected") router.push("/countries");
    else router.push("/selected");
  };

  return (
    <Container>
      <Main>
        <Logo>{t("global.logo")}</Logo>
        <LeftSection>
          <SelectInput
            onChange={handleChangeTheme}
            inHeader
            value={baseColor}
            width={168}
          >
            <MenuItem value="">
              <em>{t("global.changeMainColor")}</em>
            </MenuItem>
            <MenuItem value={"orange"}>{t("global.orange")}</MenuItem>
            <MenuItem value={"blue"}>{t("global.blue")}</MenuItem>
          </SelectInput>
          <SelectInput
            onChange={handleChangeLanguage}
            inHeader
            value={lang}
            width={110}
          >
            <MenuItem value={"fa"}>{t("global.persian")}</MenuItem>
            <MenuItem value={"en"}>{t("global.english")}</MenuItem>
          </SelectInput>
          <ThemeButton variant="contained" onClick={handleChangeTheme}>
            {theme === "light" ? (
              <>
                <NightsStayOutlinedIcon /> {t("global.darkMode")}
              </>
            ) : (
              <>
                <LightModeOutlinedIcon /> {t("global.lightMode")}
              </>
            )}
          </ThemeButton>
          <SelectedCountries variant="contained" onClick={handleClickSelected}>
            {router?.pathname === "/selected" ? (
              <>{t("global.back")}</>
            ) : (
              <>
                {t("global.selected")} ({selectedCountries.length})
              </>
            )}
          </SelectedCountries>
        </LeftSection>
      </Main>
    </Container>
  );
};

export default Header;
