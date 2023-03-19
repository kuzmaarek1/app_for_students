import React from "react";
import GlobalStyle from "theme/GlobalStyle";

const AppProviders = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default AppProviders;
