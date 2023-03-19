import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/constants";
import GlobalStyle from "theme/GlobalStyle";

const AppProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default AppProviders;
