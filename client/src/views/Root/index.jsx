import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserAuthWithSocialMedia } from "context/AuthContext";
import { AuthenticatedApp, UnAuthenticatedApp } from "views";
import { useDispatch } from "react-redux";
import { useSignInWithSocialMediaMutation } from "reducers/authApiSlice";

const Root = () => {
  const { auth_token } = useSelector((state) => state.auth.authData);
  const { userSocialMedia } = UserAuthWithSocialMedia();
  console.log(userSocialMedia);
  const dispatch = useDispatch();
  const [signInWithSocialMedia] = useSignInWithSocialMediaMutation();

  useEffect(() => {
    if (userSocialMedia?.accessToken) {
      const { displayName, uid, email } = userSocialMedia;
      let [firstName, lastName] = displayName.split(" ");
      const formData = {
        firstName: firstName,
        lastName: lastName,
        uid: uid,
        email: email,
      };
      signInWithSocialMedia(formData);
    }
  }, [userSocialMedia]);

  return auth_token || userSocialMedia?.accessToken ? (
    <AuthenticatedApp />
  ) : (
    <UnAuthenticatedApp />
  );
};

export default Root;
