import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
  }
  html, body {
    height: auto;
    font-family: 'Fredoka One', Baloo;
    font-display: optional;
    font-size: 16px;
    color: #1d1d1f;
    background-color: #6cb8cf;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
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
