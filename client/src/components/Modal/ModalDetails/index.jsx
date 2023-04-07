import React, { useState } from "react";
import { Modal, ModalForm, Button } from "components";
import * as Styles from "./styles";

const ModalDetails = ({
  header,
  hook,
  details,
  subject,
  endpoint,
  closeModal,
  resetSearch,
}) => {
  console.log(details);

  const [modalIsOpenFormEdit, setModalIsOpenFormEdit] = useState(false);
  const buttonData = [
    { name: "Edit", color: "blue", func: "handleEdit" },
    { name: "Delete", color: "red", func: "handleDelete" },
  ];

  const handleButtonClick = async (name) => {
    switch (name) {
      case "handleEdit":
        setModalIsOpenFormEdit(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Styles.HeaderDetails>
        <Styles.Header>Details {header}</Styles.Header>
        <Styles.ButtonWrapper>
          {buttonData.map(({ name, color, func }) => (
            <Button
              name={name}
              color={color}
              onClick={() => handleButtonClick(func)}
            />
          ))}
        </Styles.ButtonWrapper>
      </Styles.HeaderDetails>
      <ModalForm
        header={header}
        modalIsOpen={modalIsOpenFormEdit}
        closeModal={() => {
          setModalIsOpenFormEdit(false);
        }}
        closeDetails={closeModal}
        hook={hook}
        subject={subject}
        details={details}
        endpoint={endpoint}
        resetSearch={resetSearch}
      />
    </>
  );
};

export default Modal(ModalDetails);
