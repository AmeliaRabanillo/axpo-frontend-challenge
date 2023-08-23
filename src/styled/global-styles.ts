import {createGlobalStyle} from 'styled-components';
import {mediaQueries} from "./media-queries-breakpoints";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 64px;

    ${mediaQueries.lessThan("medium")`   
    margin:0;
      .main-container {
          margin: 32px;
      }
    `};
  }
`;

export default GlobalStyle;