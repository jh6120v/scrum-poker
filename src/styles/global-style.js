import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Righteous', cursive;
  }
  #app {
    height: 100%;
  }
`;

export default GlobalStyle;
