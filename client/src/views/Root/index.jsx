import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useUserSocialMedia } from "hooks/useUserSocialMedia";
import { AuthenticatedApp, UnAuthenticatedApp } from "views";
import { useSignInWithSocialMediaMutation } from "reducers/authApiSlice";
import { Loader } from "components";
import * as Styles from "./styles";

const Root = () => {
  const { auth_token } = useSelector((state) => state.auth.authData);
  const { userSocialMedia, userSocialMediaStatus } = useUserSocialMedia();
  const [signInWithSocialMedia] = useSignInWithSocialMediaMutation();

  useEffect(() => {
    if (userSocialMedia?.accessToken) {
      const { displayName, uid, email, accessToken } = userSocialMedia;
      let [firstName, lastName] = displayName
        ? displayName.split(" ")
        : ["No", "No"];

      const formData = {
        firstName: firstName ? firstName : "No",
        lastName: lastName ? lastName : "No",
        uid: uid,
        email: email ? email : uid,
        token: accessToken,
      };
      console.log(formData);
      signInWithSocialMedia(formData);
    }
  }, [userSocialMedia]);

  return userSocialMediaStatus === true ||
    (userSocialMedia?.accessToken && !auth_token) ? (
    <Styles.LoaderWrapper>
      <Loader component={0} />
    </Styles.LoaderWrapper>
  ) : auth_token ? (
    <AuthenticatedApp />
  ) : (
    <UnAuthenticatedApp />
  );
};

export default Root;
