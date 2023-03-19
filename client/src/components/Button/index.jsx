import React from "react";
import * as Styles from "./styles";

const Button = ({ name, color }) => (
  <Styles.Button color={color}>{name}</Styles.Button>
);

export default Button;
