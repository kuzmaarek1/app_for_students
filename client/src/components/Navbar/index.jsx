import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subjectsApiSlice } from "reducers/subjectsApiSlice";
import * as Styles from "./styles";

const Navbar = () => {
  const { auth_token } = useSelector((state) => state.auth.authData);
  const { currentSubject } = useSelector((state) => state.subject);
  const dispatch = useDispatch();
  const navbarTitle = currentSubject
    ? ["subjects", "notes", "deadlines", "todolist", "account"]
    : ["account"];

  useEffect(() => {
    if (auth_token && !currentSubject) {
      dispatch(
        subjectsApiSlice.util.prefetch("getSubject", undefined, {
          force: true,
        })
      );
    }
  }, [auth_token]);
  return (
    <Styles.Wrapper>
      <Styles.Title to="/">
        {currentSubject ? currentSubject.name : "App for Students"}
      </Styles.Title>
      {auth_token && (
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
