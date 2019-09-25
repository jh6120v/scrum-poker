import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: 'Mansalva', cursive;
    font-size: 16px;
    color: #1d1d1f;
    background-color: #aadff0;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Righteous', cursive;
  }
  #app {
    height: 100%;
  }
`;

export default GlobalStyle;
