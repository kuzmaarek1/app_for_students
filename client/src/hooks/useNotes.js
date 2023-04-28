import React, { useRef } from "react";
import { useToast } from "hooks/useToast";
import {
  useEditNoteMutation,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useAddImageMutation,
  useDeleteImageMutation,
} from "reducers/notesApiSlice";

export const useNotes = () => {
  const toast = useToast();
  const fileName = useRef("");
  const [createNote] = useCreateNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const [editNote] = useEditNoteMutation();
  const [addImage] = useAddImageMutation();
  const [deleteImage] = useDeleteImageMutation();

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

  const handleAddImage = async (subject, id, register) => {
    fileName.current = "";
    const data = new FormData();
    fileName.current = `${Date.now()}${register.image[0].name}`;
    data.append("image", register.image[0], fileName.current);
    return await toast.handleDisplayBanner(
      addImage({ subject, id, data }),
      `Adding image`,
      `Added image`
    );
  };

  const handleDeleteImage = async (id) => {
    return await toast.handleDisplayBanner(
      deleteImage(id),
      `Delete image`,
      `Delete image`
    );
  };
  return {
    handleAdd,
    handleEdit,
    handleDelete,
    handleAddImage,
    handleDeleteImage,
  };
};
