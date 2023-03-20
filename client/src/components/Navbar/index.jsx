import React from "react";
import * as Styles from "./styles";

const Navbar = () => {
  return (
    <Styles.Wrapper>
      <Styles.Title to="/">App for Students</Styles.Title>
      {true && (
        <Styles.Ul>
          {["subjects", "notes", "deadlines", "todolits", "account"].map(
            (props, index) => (
              <Styles.Link key={index} to={props}>
                {props[0].toUpperCase()}
                {props.slice(1)}
              </Styles.Link>
            )
          )}
        </Styles.Ul>
      )}
    </Styles.Wrapper>
  );
};

export default Navbar;
