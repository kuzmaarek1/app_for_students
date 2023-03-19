import React from "react";
import * as Styles from "./styles";

const Field = ({ name }) => {
  return (
    <Styles.Wrapper>
      <Styles.Input name={name} id={name} />
      <Styles.Label htmlFor={name}>{name}</Styles.Label>
    </Styles.Wrapper>
  );
};

export default Field;
