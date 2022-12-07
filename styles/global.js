import { createGlobalStyle } from "styled-components";


export const GlobalStyles=createGlobalStyle`

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    body {
        font-family: 'Kanit', sans-serif;
        min-height: 100vh;
        width: 100vw;
        transition: all 0.25s linear;
    }
`