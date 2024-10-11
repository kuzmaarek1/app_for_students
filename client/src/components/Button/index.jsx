import React from "react";
import * as Styles from "./styles";

const Button = ({ name, color, width, height, fontSize, onClick }) => (
  <Styles.Button
    color={color}
    width={width}
    height={height}
    fontSize={fontSize}
    onClick={onClick}
  >
    <Styles.Span>{name} </Styles.Span>
  </Styles.Button>
);

export default Button;
