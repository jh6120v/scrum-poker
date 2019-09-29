import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const ResetStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  img {
    display: block;
  }
  :focus {
    outline: 0;
  }
  // for mozilla
  ::-moz-focus-inner {
    border: 0 transparent;
    outline : 0;
  }
`;

export default ResetStyle;
