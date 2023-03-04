import React from "react";
import Router from "./shared/Router";

import Reset from "./style/Reset";
import GlobalStyle from "./style/GlobalStyle";
import theme from "./style/Theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
