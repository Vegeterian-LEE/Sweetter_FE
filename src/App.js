import React from "react";
import Router from "./shared/Router";

import Reset from "./style/Reset";
import GlobalStyle from "./style/GlobalStyle";

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
