import React from "react";
import { AuthenticatedApp, UnAuthenticatedApp } from "views";

const Root = () => {
  return false ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
};

export default Root;
