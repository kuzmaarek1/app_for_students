import React from "react";
import { List } from "components";
import { useTodolists } from "hooks/useTodolists";
import { todolistsApiSlice } from "reducers/todolistsApiSlice";

const Todolists = () => {
  const hook = useTodolists();
  const endpoint = todolistsApiSlice;
  const getEndpoint = todolistsApiSlice.endpoints.getTodolists;
  return (
    <List
      header="Todolist"
      hook={hook}
      endpoint={endpoint}
      getEndpoint={getEndpoint}
      searchEndpoint={getEndpoint}
    />
  );
};

export default Todolists;
