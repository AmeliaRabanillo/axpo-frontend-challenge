import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 128px 64px;

    @media (max-width: 570px) {
      margin: 64px 32px;
    }
  }
`;

export default GlobalStyle;