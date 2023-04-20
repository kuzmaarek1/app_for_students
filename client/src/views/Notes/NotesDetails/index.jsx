import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { notesApiSlice } from "reducers/notesApiSlice";

const NotesDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  console.log(params.id);
  const { currentSubject } = useSelector((state) => state.subject);
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
  return <div>NotesDetails</div>;
};

export default NotesDetails;
