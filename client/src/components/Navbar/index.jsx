import React from "react";
import * as Styles from "./styles";

const Navbar = () => {
  const navbarTitle = false
    ? ["subjects", "notes", "deadlines", "todolits", "account"]
    : ["account"];
  return (
    <Styles.Wrapper>
      <Styles.Title to="/">App for Students</Styles.Title>
      {true && (
        <Styles.Ul>
          {navbarTitle.map((props, index) => (
            <Styles.Link key={index} to={props}>
              {props[0].toUpperCase()}
              {props.slice(1)}
            </Styles.Link>
          ))}
        </Styles.Ul>
      )}
    </Styles.Wrapper>
  );
};

export default Navbar;
