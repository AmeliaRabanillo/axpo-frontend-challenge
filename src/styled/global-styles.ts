import {createGlobalStyle} from 'styled-components';
import {mediaQueries} from "./media-queries-breakpoints";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 128px 64px;

    ${mediaQueries.lessThan("small")`   
      margin: 64px 32px;
    `};
  }
`;

export default GlobalStyle;