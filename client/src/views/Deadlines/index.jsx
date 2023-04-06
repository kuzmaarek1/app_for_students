import React from "react";
import { List } from "components";
import { useDeadlines } from "hooks/useDeadlines";
import { deadlinesApiSlice } from "reducers/deadlinesApiSlice";

const Deadlines = () => {
  const hook = useDeadlines();
  const endpoint = deadlinesApiSlice;
  const getEndpoint = deadlinesApiSlice.endpoints.getDeadlines;
  return (
    <List
      header="Deadline"
      hook={hook}
      endpoint={endpoint}
      getEndpoint={getEndpoint}
      searchEndpoint={getEndpoint}
    />
  );
};

export default Deadlines;
