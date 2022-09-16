import React from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalStyle } from "public/assets/styles/globalStyle";
import rtlPlugin from "stylis-plugin-rtl";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cacheRtl = createCache({ key: "muirtl", stylisPlugins: [rtlPlugin] });

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const themeLight = createTheme({
  color: {
    primary: "#D56C0C",
    body: {
      background: "white",
      color: "#354752",
    },
    main: {
      background: "#f4f7fb",
    },
    card: {
      background: "#FFFFFF",
      title: "#354752",
      info: "#607079",
    },
    search: {
      title: "#354752",
      counter: "#8798A1",
    },
    input: {
      color: "#354752",
      borderColor: "#C8D3D9",
      background: "white",
    },
    header: {
      background: "white",
      borderColor: "#F1F4F5",
    },
  },
});

const themeDark = createTheme({
  color: {
    primary: "#000000",
    body: {
      background: "#29313d",
      color: "white",
    },
    main: {
      background: "#343c49",
    },
    card: {
      background: "#29313d",
      title: "white",
      info: "#8899a3",
    },
    search: {
      title: "white",
      counter: "#8798A1",
    },
    input: {
      color: "#c1c9cd",
      borderColor: "#343c49",
      background: "#343c49",
    },
    header: {
      background: "#343c49",
      borderColor: "#343c49",
    },
  },
});

const MUIProvider = ({ children }) => {
  const theme = useSelector((state) => state.global.theme);
  const lang = useSelector((state) => state.global.lang);
  let direction = lang;
  lang === "fa" ? (direction = "rtl") : (direction = "ltr");
  themeLight.direction = direction;
  themeDark.direction = direction;
  const final_theme = theme === "dark" ? themeDark : themeLight;

  return (
    <Direction lang={lang} theme={final_theme}>
      {children}
    </Direction>
  );
};
export default MUIProvider;

const Direction = ({ children, theme, lang }) => {
  if (lang === "fa") {
    return (
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <CacheProvider value={cacheRtl}>
            <GlobalStyle theme={theme} />
            {children}
          </CacheProvider>
        </StylesProvider>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </ThemeProvider>
    );
  }
};
