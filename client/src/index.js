import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "providers";
import { Root } from "views";
import { AuthContextProvider } from "context/AuthContext"
import "animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppProviders>
        <Root />
      </AppProviders>
    </AuthContextProvider>
  </React.StrictMode>
);
