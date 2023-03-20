import React from "react";
import * as Styles from "./styles";

const Button = ({ name, color }) => (
  <Styles.Button color={color}>
    <Styles.Span>{name} </Styles.Span>
  </Styles.Button>
);

export default Button;
