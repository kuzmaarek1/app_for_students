import { useToast } from "hooks/useToast";
import { setCurrentSubject } from "reducers/subject";
import { useDispatch } from "react-redux";
import {
  useEditSubjectMutation,
  useCreateSubjectMutation,
  useDeleteSubjectMutation,
} from "reducers/subjectsApiSlice";

export const useSubjects = () => {
  const toastHook = useToast();
  const dispatch = useDispatch();
  const [createSubject] = useCreateSubjectMutation();
  const [deleteSubject] = useDeleteSubjectMutation();
  const [editSubject] = useEditSubjectMutation();

  const handleAdd = async (data) => {
    return await toastHook.handleDisplayBanner(
      createSubject(data),
      `Adding subject ${data.name}`,
      `Added subject ${data.name}`
    );
  };

  const handleEdit = async (id, data) => {
    return await toastHook.handleDisplayBanner(
      editSubject({ id, data }),
      `Updating subject ${data.name}`,
      `Updated subject ${data.name}`
    );
  };

  const handleDelete = async (subject) => {
    return await toastHook.handleDisplayBanner(
      deleteSubject({ subject }),
      `Deleting subject ${subject.name}`,
      `Deleted subject ${subject.name}`
    );
  };

  const handleChangeSubject = (subject) => {
    dispatch(setCurrentSubject({ subject }));
    toastHook.handleDisplayBanner(
      `success`,
      null,
      `Changed subject ${subject.name}`
    );
  };

  return { handleAdd, handleEdit, handleDelete, handleChangeSubject };
};
