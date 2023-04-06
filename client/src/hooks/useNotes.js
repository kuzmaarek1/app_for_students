import { useToast } from "hooks/useToast";
import {
  useEditNoteMutation,
  useCreateNoteMutation,
  useDeleteNoteMutation,
} from "reducers/notesApiSlice";

export const useNotes = () => {
  const toast = useToast();
  const [createNote] = useCreateNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const [editNote] = useEditNoteMutation();

  const handleAdd = async (data, subject) => {
    return await toast.handleDisplayBanner(
      createNote({ data, subject }),
      `Adding note ${data.topic}`,
      `Added note ${data.topic}`
    );
  };

  const handleEdit = async (id, data, subject) => {
    return await toast.handleDisplayBanner(
      editNote({ id, data, subject }),
      `Updating note ${data.topic}`,
      `Updated note ${data.topic}`
    );
  };

  const handleDelete = async (notes, subject) => {
    const { id } = notes;
    return await toast.handleDisplayBanner(
      deleteNote({ id, subject }),
      `Deleting note ${notes.topic}`,
      `Deleted note ${notes.topic}`
    );
  };

  return { handleAdd, handleEdit, handleDelete };
};
