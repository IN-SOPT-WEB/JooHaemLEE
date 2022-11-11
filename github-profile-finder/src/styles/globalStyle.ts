import { createGlobalStyle, css } from "styled-components";

const background = css`
  background-color: #242424;
  background: linear-gradient(43deg, #242424 0%, #7E8BA0 46%, #425372 100%);
`;

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
    }

    html {
        font-family: 'Poppins', sans-serif;
    }

    body {
        ${background};

        height: 100vh;
        font-size: 16px;

        color: white;
    }

    
`;

export default GlobalStyle;
