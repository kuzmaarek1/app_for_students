import { useToast } from "hooks/useToast";
import {
  useEditTodolistMutation,
  useCreateTodolistMutation,
  useDeleteTodolistMutation,
  useDoneTodolistMutation,
} from "reducers/todolistsApiSlice";

export const useTodolists = () => {
  const toast = useToast();
  const [createTodolist] = useCreateTodolistMutation();
  const [deleteTodolist] = useDeleteTodolistMutation();
  const [editTodolist] = useEditTodolistMutation();
  const [doneTodolist] = useDoneTodolistMutation();

  const handleAdd = async (data, subject) => {
    return await toast.handleDisplayBanner(
      createTodolist({ data, subject }),
      `Adding todolist ${data.description}`,
      `Added todolist ${data.description}`
    );
  };

  const handleEdit = async (id, data, subject) => {
    return await toast.handleDisplayBanner(
      editTodolist({ id, data, subject }),
      `Updating todolist ${data.description}`,
      `Updated todolist ${data.description}`
    );
  };

  const handleDelete = async (todolist, subject) => {
    const { id } = todolist;
    return await toast.handleDisplayBanner(
      deleteTodolist({ id, subject }),
      `Deleting todolist ${todolist.description}`,
      `Deleted todolist ${todolist.description}`
    );
  };

  const handleDoned = async (todolist, subject) => {
    const { id } = todolist;
    return await toast.handleDisplayBanner(
      doneTodolist({ id, subject }),
      `Doing todolist ${todolist.description}`,
      `Doned todolist ${todolist.description}`
    );
  };

  return { handleAdd, handleEdit, handleDelete, handleDoned };
};
