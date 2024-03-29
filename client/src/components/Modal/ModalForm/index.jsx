import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  modalSubjectForm,
  modalNoteForm,
  modalDeadlineForm,
  modalTodoListForm,
  modalImageForm,
  defaultSubjectValues,
  defaultNoteValues,
  defaultDeadlineValues,
  defaultTodoList,
  defaultImageValues,
} from "constans";
import { Modal, Button, Field } from "components";
import { useDispatch } from "react-redux";
import * as Styles from "./styles";

const ModalForm = ({
  header,
  hook,
  modalIsOpen,
  closeModal,
  subject,
  resetSearch,
  details,
  closeDetails,
  notesId,
  setPage,
  endpoint,
}) => {
  const dispatch = useDispatch();
  const formData =
    header === "Subject"
      ? modalSubjectForm
      : header === "Note"
      ? modalNoteForm
      : header === "Deadline"
      ? modalDeadlineForm
      : header === "Image"
      ? modalImageForm
      : modalTodoListForm;
  const defaultValue =
    header === "Subject"
      ? defaultSubjectValues
      : header === "Note"
      ? defaultNoteValues
      : header === "Deadline"
      ? defaultDeadlineValues
      : header === "Image"
      ? defaultImageValues
      : defaultTodoList;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
  });

  useEffect(() => {
    if (details) {
      Object.entries(details).forEach(([key, value]) => {
        formData.forEach(
          ({ name }) => name.includes(key) && setValue(key, value)
        );
      });
    }
  }, [details?.id]);

  return (
    <>
      <Styles.Header>
        {details ? `Edit ${header}` : `Add ${header}`}
      </Styles.Header>
      <Styles.Form
        onSubmit={handleSubmit(async (register) => {
          if (!details) {
            if (header === "Image")
              await hook.handleAddImage(subject?.id, notesId, register);
            else await hook.handleAdd(register, subject?.id);
          } else await hook.handleEdit(details.id, register, subject?.id);
          dispatch(endpoint.util.resetApiState());
          resetSearch(`${header.toLowerCase()}-search`);
          setPage(0);
          closeModal();
          reset();
          closeDetails && closeDetails();
          resetSearch && resetSearch(`${header.toLowerCase()}-search`);
        })}
      >
        {formData.map((props, index) => (
          <Field
            {...props}
            key={index}
            watch={watch}
            errors={!!errors[props.name]}
            register={register}
            header={header}
          />
        ))}
        <Styles.ButtonWrapper>
          <Button height="40px" name="Submit" />
        </Styles.ButtonWrapper>
      </Styles.Form>
    </>
  );
};

export default Modal(ModalForm);
