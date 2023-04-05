import React from "react";
import * as Styles from "./styles";

const Field = ({ type, name, watch, errors, register, required, validate }) => {
  const inputOrTextarea = name === "description" ? "textarea" : "input";
  const ref = !validate
    ? { required }
    : {
        required: required,
        validate: (value) => value === validate || "The passwords do not match",
      };
  return (
    <Styles.Wrapper description={name === "description"}>
      <Styles.Input
        as={inputOrTextarea}
        type={type}
        description={name === "description"}
        id={name}
        {...register(name, ref)}
        empty={!watch(name)}
        error={errors}
        exam={name === "exam"}
      />
      <Styles.Label
        htmlFor={name}
        empty={!watch(name)}
        error={errors}
        big={name === "re_password"}
        date={name === "date"}
        exam={name === "exam"}
      >
        {name === "re_password"
          ? "Repeat password"
          : `${name[0].toUpperCase()}${name.slice(1).replace("_", " ")}`}
      </Styles.Label>
      {errors && (
        <Styles.Span>
          {name === "re_password"
            ? "The passwords must be identical"
            : `${name[0].toUpperCase()}${name
                .slice(1)
                .replace("_", " ")} is required`}
        </Styles.Span>
      )}
    </Styles.Wrapper>
  );
};

export default Field;
