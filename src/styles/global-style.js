import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
  }
  html, body {
    height: 100%;
    font-family: 'Fredoka One', Baloo;
    font-size: 16px;
    color: #1d1d1f;
    background-color: #aadff0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select:none;
  }
  #app {
    display: flex;
    height: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
