import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/constants";
import { persistor, store } from "store";
import GlobalStyle from "theme/GlobalStyle";
import { AuthContextProvider } from "context/AuthContext";
import { Navbar } from "components";

const AppProviders = ({ children }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Toaster />
          <Navbar />
          <AuthContextProvider>{children}</AuthContextProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);

export default AppProviders;
