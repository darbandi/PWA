import { createGlobalStyle } from "styled-components";
import { withTheme } from "@mui/styles";

export const GlobalStyle = withTheme(createGlobalStyle`
    body, 
    html, 
    * {
        direction: ${({ theme }) => theme.direction};
    }

    html,
    body {
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.color.body.background};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        font-family: IRANSans !important;
    }

`);
