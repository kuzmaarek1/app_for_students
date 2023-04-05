import { useToast } from "hooks/useToast";
import {
  useEditDeadlineMutation,
  useCreateDeadlineMutation,
  useDeleteDeadlineMutation,
} from "reducers/deadlineApiSlice";

export const useDeadlines = () => {
  const toast = useToast();
  const [createDeadline] = useCreateDeadlineMutation();
  const [deleteDeadline] = useDeleteDeadlineMutation();
  const [editDeadline] = useEditDeadlineMutation();

  const handleAdd = async (data, subject) => {
    return await toast.handleDisplayBanner(
      createDeadline({ data, subject }),
      `Adding deadline ${data.description}`,
      `Added deadline ${data.description}`
    );
  };

  const handleEdit = async (id, data, subject) => {
    return await toast.handleDisplayBanner(
      editDeadline({ id, data, subject }),
      `Updating deadline ${data.description}`,
      `Updated deadline ${data.description}`
    );
  };

  const handleDelete = async (deadline, subject) => {
    const { id } = deadline;
    return await toast.handleDisplayBanner(
      deleteDeadline({ id, subject }),
      `Deleting deadline ${deadline.description}`,
      `Deleted deadline ${deadline.description}`
    );
  };

  return { handleAdd, handleEdit, handleDelete };
};
