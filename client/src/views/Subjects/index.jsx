import React from "react";
import { List } from "components";
import { useSubjects } from "hooks/useSubjects";
import { subjectsApiSlice } from "reducers/subjectsApiSlice";

const Subjects = () => {
  const hook = useSubjects();
  const endpoint = subjectsApiSlice;
  const getEndpoint = subjectsApiSlice.endpoints.getSubjects;
  const searchEndpoint = subjectsApiSlice.endpoints.searchSubject;
  return (
    <List
      header="Subject"
      hook={hook}
      endpoint={endpoint}
      getEndpoint={getEndpoint}
      searchEndpoint={searchEndpoint}
    />
  );
};

export default Subjects;
