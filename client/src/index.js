import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "providers";
import { Button } from "components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <Button name="button" />
    </AppProviders>
  </React.StrictMode>
);
