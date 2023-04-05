import { useToast } from "hooks/useToast";
import { setCurrentSubject } from "reducers/subject";
import { useDispatch } from "react-redux";
import {
  useEditSubjectMutation,
  useCreateSubjectMutation,
  useDeleteSubjectMutation,
} from "reducers/subjectsApiSlice";

export const useSubjects = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [createSubject] = useCreateSubjectMutation();
  const [deleteSubject] = useDeleteSubjectMutation();
  const [editSubject] = useEditSubjectMutation();

  const handleAdd = async (data) => {
    return await toast.handleDisplayBanner(
      createSubject(data),
      `Adding subject ${data.name}`,
      `Added subject ${data.name}`
    );
  };

  const handleEdit = async (id, data) => {
    return await toast.handleDisplayBanner(
      editSubject({ id, data }),
      `Updating subject ${data.name}`,
      `Updated subject ${data.name}`
    );
  };

  const handleDelete = async (subject) => {
    return await toast.handleDisplayBanner(
      deleteSubject(subject),
      `Deleting subject ${subject.name}`,
      `Deleted subject ${subject.name}`
    );
  };

  const handleChangeSubject = (subject) => {
    dispatch(setCurrentSubject(subject));
    toast.handleDisplayBanner(
      `success`,
      null,
      `Changed subject ${subject.name}`
    );
  };

  return { handleAdd, handleEdit, handleDelete, handleChangeSubject };
};
