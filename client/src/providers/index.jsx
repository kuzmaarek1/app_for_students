import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/constants";
import GlobalStyle from "theme/GlobalStyle";
import { Navbar } from "components";

const AppProviders = ({ children }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
    </ThemeProvider>
  </BrowserRouter>
);

export default AppProviders;
