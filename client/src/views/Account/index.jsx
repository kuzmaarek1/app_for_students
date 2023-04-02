import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { useGetUserQuery } from "reducers/authApiSlice";
import { Button, Loader } from "components";
import * as Styles from "./styles";

const Account = () => {
  const authHook = useAuth();
  const { currentSubject } = useSelector((state) => state.subject);
  const { data: auth, isLoading } = useGetUserQuery();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Styles.Wrapper>
      <Styles.Header>MyAccount</Styles.Header>
      {isLoading ? (
        <Loader />
      ) : (
        <Styles.DetailsWrapper>
          {auth &&
            Object.entries(auth).map(([key, index]) => (
              <React.Fragment key={key}>
                <Styles.Details boldText={true}>
                  {key[0].toUpperCase()}
                  {key.slice(1).replace("_", " ")}
                </Styles.Details>
                <Styles.Details>{index}</Styles.Details>
              </React.Fragment>
            ))}
        </Styles.DetailsWrapper>
      )}
      <Styles.ButtonWrapper small={currentSubject?.id ? true : false}>
        {!currentSubject?.id && (
          <Button
            height="40px"
            onClick={() => setModalIsOpen(true)}
            name="Add Subject"
          />
        )}
        <Button
          onClick={() => authHook.handleLogOut()}
          color="red"
          height="40px"
          name="Log out"
        />
      </Styles.ButtonWrapper>
    </Styles.Wrapper>
  );
};

export default Account;
