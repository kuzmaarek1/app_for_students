import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { useSubjects } from "hooks/useSubjects";
import { useGetUserQuery } from "reducers/authApiSlice";
import { Button, Loader, ModalForm } from "components";
import { UserAuthWithSocialMedia } from "context/AuthContext";
import * as Styles from "./styles";

const Account = () => {
  const authHook = useAuth();
  const subject = useSubjects();
  const { userSocialMedia, logOut } = UserAuthWithSocialMedia();
  const { currentSubject } = useSelector((state) => state.subject);
  const { data: auth, isLoading } = useGetUserQuery();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles.Wrapper>
      <Styles.Header>MyAccount</Styles.Header>
      {isLoading ? (
        <Loader component={0} />
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
          <>
            <Button
              height="40px"
              onClick={() => setModalIsOpen(true)}
              name="Add Subject"
            />
            <ModalForm
              header="Subject"
              modalIsOpen={modalIsOpen}
              closeModal={() => setModalIsOpen(false)}
              hook={subject}
            />
          </>
        )}
        <Button
          onClick={() =>
            !userSocialMedia?.accessToken
              ? authHook.handleLogOut()
              : handleSignOut()
          }
          color="red"
          height="40px"
          name="Log out"
        />
      </Styles.ButtonWrapper>
    </Styles.Wrapper>
  );
};

export default Account;
