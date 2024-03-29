import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginForm, registerForm, defaultAuthValues } from "constans";
import { useAuth } from "hooks/useAuth";
import { GoogleButton } from "react-google-button";
import { useUserSocialMedia } from "hooks/useUserSocialMedia";
import { Button, Field } from "components";
import {
  faFacebookF,
  faGoogle,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import * as Styles from "./styles";

const SocialMediaWrapper = ({ icon, handleClick, backgroundColor }) => {
  return (
    <Styles.SocialMediaButton backgroundColor={backgroundColor}>
      <Styles.Icon icon={icon} onClick={handleClick} />
    </Styles.SocialMediaButton>
  );
};

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const auth = useAuth();
  const {
    googleSignIn,
    facebookSignIn,
    githubSignIn,
    twitterSignIn,
    userSocialMedia,
  } = useUserSocialMedia();
  const [isLogin, setIsLogin] = useState(true);
  const [dataform, setFormData] = useState(loginForm);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await githubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTwitterSignIn = async () => {
    try {
      await twitterSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const switchMode = () => {
    reset(defaultAuthValues);
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  useEffect(() => {
    setFormData(isLogin ? loginForm : registerForm);
  }, [isLogin]);

  return (
    <Styles.Wrapper>
      <Styles.WrapperAnimate isLogin={isLogin}>
        <Styles.Header isLogin={isLogin}>
          {isLogin ? "Log In" : "Sign Up"}
        </Styles.Header>
        <Styles.Form
          onSubmit={
            isLogin
              ? handleSubmit(auth.handleSiginIn)
              : handleSubmit(async (register) => {
                  if ("first_name" in register)
                    await auth.handleSignUp(register);
                  reset();
                  setIsLogin(true);
                })
          }
        >
          {dataform.map((props, index) => (
            <Field
              key={index}
              {...props}
              watch={watch}
              errors={!!errors[props.name]}
              register={register}
              required={true}
              validate={
                props.name === "re_password" ? watch("password") : false
              }
            />
          ))}
          <Styles.ButtonWrapper>
            <Button
              width="300px"
              height="40px"
              name={isLogin ? " Log In" : "Sign Up"}
            />
          </Styles.ButtonWrapper>
        </Styles.Form>
        <Styles.ButtonWrapper>
          <Button
            color="red"
            width="400px"
            height="40px"
            onClick={switchMode}
            name={
              isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Log In"
            }
          />
        </Styles.ButtonWrapper>
        <Styles.SocialMediaWrapper>
          <SocialMediaWrapper
            icon={faGoogle}
            handleClick={handleGoogleSignIn}
            backgroundColor="#DB4437"
          />
          <SocialMediaWrapper
            icon={faFacebookF}
            handleClick={handleFacebookSignIn}
            backgroundColor="#1877f2"
          />
          <SocialMediaWrapper
            icon={faGithub}
            handleClick={handleGithubSignIn}
            backgroundColor="#000"
          />
          <SocialMediaWrapper
            icon={faXTwitter}
            handleClick={handleTwitterSignIn}
            backgroundColor="#000"
          />{" "}
        </Styles.SocialMediaWrapper>
      </Styles.WrapperAnimate>
    </Styles.Wrapper>
  );
};

export default Auth;
