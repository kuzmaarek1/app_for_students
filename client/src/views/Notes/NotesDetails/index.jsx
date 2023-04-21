import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { notesApiSlice } from "reducers/notesApiSlice";
import { useNotes } from "hooks/useNotes";
import { Button, ModalForm } from "components";

const NotesDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const hook = useNotes();
  const { currentSubject } = useSelector((state) => state.subject);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    dispatch(
      notesApiSlice.util.prefetch(
        `getNote`,
        { subject: currentSubject.id, id: params.id },
        {
          force: true,
        }
      )
    );
  }, []);

  const { data, isFetching } = notesApiSlice.endpoints.getNote.useQueryState({
    subject: currentSubject.id,
    id: params.id,
  });
  console.log(data);

  return (
    <div>
      <Button
        width="65%"
        height="7vh"
        name={`Add image`}
        onClick={() => setModalIsOpen(true)}
      />
      NotesDetails
      <ModalForm
        header="Image"
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        hook={hook}
        subject={currentSubject}
        notesId={params.id}
        //resetSearch={resetField}
      />
    </div>
  );
};

export default NotesDetails;
