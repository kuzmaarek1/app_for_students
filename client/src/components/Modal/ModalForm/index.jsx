import React from "react";
import { useForm } from "react-hook-form";
import {
  modalSubjectForm,
  modalNoteForm,
  modalDeadlineForm,
  modalTodoListForm,
  defaultSubjectValues,
  defaultNoteValues,
  defaultDeadlineValues,
  defaultTodoList,
} from "constans";
import { Modal, Button, Field } from "components";
import * as Styles from "./styles";

//Subject, Deadline, Note, Todolist
const ModalForm = ({ header, modalIsOpen, closeModal }) => {
  const formData =
    header === "Subject"
      ? modalSubjectForm
      : header === "Note"
      ? modalNoteForm
      : header === "Deadline"
      ? modalDeadlineForm
      : modalTodoListForm;
  const defaultValue =
    header === "Subject"
      ? defaultSubjectValues
      : header === "Note"
      ? defaultNoteValues
      : header === "Deadline"
      ? defaultDeadlineValues
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

  return (
    <>
      <Styles.Header>Add {header}</Styles.Header>
      <Styles.Form onSubmit={handleSubmit(() => {})}>
        {formData.map((props, index) => (
          <Field
            {...props}
            key={index}
            watch={watch}
            errors={!!errors[props.name]}
            register={register}
          />
        ))}
      </Styles.Form>
      <Styles.ButtonWrapper>
        <Button height="40px" name="Submit" />
      </Styles.ButtonWrapper>
    </>
  );
};

export default Modal(ModalForm);
