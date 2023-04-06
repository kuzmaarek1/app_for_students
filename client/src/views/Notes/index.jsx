import React from "react";
import { List } from "components";
import { useNotes } from "hooks/useNotes";
import { notesApiSlice } from "reducers/notesApiSlice";

const Notes = () => {
  const hook = useNotes();
  const endpoint = notesApiSlice;
  const getEndpoint = notesApiSlice.endpoints.getNotes;
  const searchEndpoint = notesApiSlice.endpoints.searchNote;
  return (
    <List
      header="Note"
      hook={hook}
      endpoint={endpoint}
      getEndpoint={getEndpoint}
      searchEndpoint={searchEndpoint}
    />
  );
};

export default Notes;
