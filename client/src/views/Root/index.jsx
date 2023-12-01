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
    console.log(userSocialMedia);
    if (userSocialMedia?.accessToken) {
      const { displayName, uid, email, accessToken } = userSocialMedia;
      let [firstName, lastName] = displayName.split(" ");
      const formData = {
        firstName: firstName,
        lastName: lastName,
        uid: uid,
        email: email,
        token: accessToken,
      };
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
