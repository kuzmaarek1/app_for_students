export const loginForm = [
  { type: "email", name: "username" },
  { type: "password", name: "password" },
];

export const registerForm = [
  { type: "text", name: "first_name" },
  { type: "text", name: "last_name" },
  { type: "email", name: "username" },
  { type: "password", name: "password" },
  { type: "password", name: "re_password" },
];

export const defaultAuthValues = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  re_password: "",
};

export const modalSubjectForm = [
  { type: "text", name: "name" },
  { type: "text", name: "description" },
  { type: "number", name: "ects" },
];

export const modalNoteForm = [
  { type: "number", name: "number" },
  { type: "text", name: "topic" },
  { type: "text", name: "description" },
  { type: "date", name: "date" },
];

export const modalDeadlineForm = [
  { type: "text", name: "description" },
  { type: "checkbox", name: "exam" },
  { type: "date", name: "date" },
];

export const modalTodoListForm = [{ type: "text", name: "description" }];

export const defaultSubjectValues = {
  name: "",
  description: "",
  ects: "",
};

export const defaultNoteValues = {
  number: "",
  topic: "",
  description: "",
  date: "",
};

export const defaultDeadlineValues = {
  description: "",
  exam: "",
  date: "",
};

export const defaultTodoList = {
  description: "",
};
