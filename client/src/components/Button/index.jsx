import React from "react";
import * as Styles from "./styles";

const Button = ({ name, color, width, height, onClick }) => (
  <Styles.Button color={color} width={width} height={height} onClick={onClick}>
    <Styles.Span>{name} </Styles.Span>
  </Styles.Button>
);

export default Button;
