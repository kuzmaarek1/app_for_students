import React from "react";
import { useSelector } from "react-redux";
import { UserAuthWithSocialMedia } from "context/AuthContext";
import { AuthenticatedApp, UnAuthenticatedApp } from "views";

const Root = () => {
  const { auth_token } = useSelector((state) => state.auth.authData);
  const { userSocialMedia } = UserAuthWithSocialMedia();

  return auth_token || userSocialMedia?.accessToken ? (
    <AuthenticatedApp />
  ) : (
    <UnAuthenticatedApp />
  );
};

export default Root;
