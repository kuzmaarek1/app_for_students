import React from "react";
import * as Styles from "./styles";

const Field = ({
  type,
  name,
  watch,
  errors,
  register,
  required,
  validate,
  width,
  SmWidth,
  LgWidth,
  headerList,
  headerName,
  header,
  onChange,
}) => {
  const inputOrTextarea = name === "description" ? "textarea" : "input";
  const changeFunc = onChange ? onChange : () => {};
  const ref = !validate
    ? { required, onChange: changeFunc }
    : {
        required: required,
        validate: (value) => value === validate || "The passwords do not match",
      };
  return (
    <Styles.Wrapper
      description={name === "description"}
      note={header === "Note"}
      headerList={headerList}
      width={width}
      LgWidth={LgWidth}
      SmWidth={SmWidth}
    >
      <Styles.Input
        as={inputOrTextarea}
        type={type}
        note={header === "Note"}
        description={name === "description"}
        file={type === "file"}
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
        file={type === "file"}
        headerList={headerList}
      >
        {name === "re_password"
          ? "Repeat password"
          : headerList
          ? headerName
          : `${name[0].toUpperCase()}${name.slice(1).replace("_", " ")}`}
      </Styles.Label>
      {errors && (
        <Styles.Span
          description={name === "description"}
          note={header === "Note"}
        >
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
