import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
* {
  font-family: 'LINESeedKR-Bd';
  font-weight: 700;
}
`;

export default GlobalStyle;
