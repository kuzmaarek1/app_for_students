import React from "react";
import * as Styles from "./styles";

const MobileNavbar = ({ setShowNabar, showNavbar, navbarTitle }) => {
  return (
    <Styles.MobileNavbar>
      <Styles.HaburgerLines
        onClick={() => setShowNabar((prevState) => !prevState)}
      >
        <Styles.HaburgerLine showNavbar={showNavbar}></Styles.HaburgerLine>
      </Styles.HaburgerLines>
      <Styles.MobileUl showNavbar={!showNavbar}>
        {navbarTitle.map((props, index) => (
          <Styles.MobileLink
            onClick={() => setShowNabar(false)}
            to={props}
            key={index}
          >
            {props[0].toUpperCase()}
            {props.slice(1)}
          </Styles.MobileLink>
        ))}
      </Styles.MobileUl>
    </Styles.MobileNavbar>
  );
};

export default MobileNavbar;
