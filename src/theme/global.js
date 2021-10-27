import { createGlobalStyle } from "styled-components";

import * as colors from "@alef/theme/colors";
import { family } from "@alef/theme/font";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    text-rendering: optimizeLegibility;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
    /* Text may be inflated in this exact proportion - mobile devices */
    text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    color: ${colors.dark};
    font-family: ${family.montserrat};
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
  }
`;

export default GlobalStyle;