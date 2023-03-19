import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "providers";
import { Button } from "components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <Button name="button" color="red" />
      <Button name="button" color="blue" />
    </AppProviders>
  </React.StrictMode>
);
