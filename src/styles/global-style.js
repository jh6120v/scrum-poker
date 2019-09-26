import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 16px;
    color: #1d1d1f;
    background-color: #aadff0;
  }
  #app {
    height: 100%;
  }
`;

export default GlobalStyle;
