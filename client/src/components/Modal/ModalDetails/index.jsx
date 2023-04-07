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
      case "handleDelete":
        await hook.handleDelete(details, subject?.id);
        resetSearch(`${header.toLowerCase()}-search`);
        closeModal();
        break;
      default:
        break;
    }
  };

  const tableRow =
    header === "Subject"
      ? ["name", "ects", "description"]
      : header === "Deadline"
      ? ["description", "exam", "date"]
      : ["description", "isDone"];

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
              key={name}
            />
          ))}
        </Styles.ButtonWrapper>
      </Styles.HeaderDetails>
      <Styles.DetailsWrapper>
        {Object.entries(details).map(
          ([key, value], index) =>
            tableRow.includes(key) && (
              <React.Fragment key={`${key}-${index}`}>
                <Styles.Details
                  boldText={true}
                  description={key === "description"}
                >
                  {key[0].toUpperCase()}
                  {key.slice(1).replace("_", " ")}
                </Styles.Details>
                <Styles.Details description={key === "description"}>
                  {String(value)}
                </Styles.Details>
              </React.Fragment>
            )
        )}
      </Styles.DetailsWrapper>
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
        resetSearch={resetSearch}
      />
    </>
  );
};

export default Modal(ModalDetails);
