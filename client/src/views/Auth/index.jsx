import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginForm, registerForm, defaultValues } from "constans";
import { Button, Field } from "components";
import * as Styles from "./styles";

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [isLogin, setIsLogin] = useState(true);
  const [dataform, setFormData] = useState(loginForm);

  const switchMode = () => {
    reset(defaultValues);
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
          onSubmit={handleSubmit((register) => console.log(register))}
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
            <Button width="400px" name={isLogin ? " Log In" : "Sign Up"} />
          </Styles.ButtonWrapper>
        </Styles.Form>
        <Styles.ButtonWrapper>
          <Button
            color="red"
            width="500px"
            onClick={switchMode}
            name={
              isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Log In"
            }
          />
        </Styles.ButtonWrapper>
      </Styles.WrapperAnimate>
    </Styles.Wrapper>
  );
};

export default Auth;
