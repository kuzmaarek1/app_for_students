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
  { type: "text", name: "name", required: "true" },
  { type: "text", name: "description", required: "true" },
  { type: "number", name: "ects", required: "true" },
];

export const modalNoteForm = [
  { type: "number", name: "number", required: "true" },
  { type: "text", name: "topic", required: "true" },
  { type: "text", name: "description", required: "true" },
  { type: "date", name: "date", required: "true" },
];

export const modalDeadlineForm = [
  { type: "text", name: "description", required: "true" },
  { type: "checkbox", name: "exam" },
  { type: "date", name: "date", required: "true" },
];

export const modalTodoListForm = [{ type: "text", name: "description" }];

export const modalImageForm = [{ type: "file", name: "image" }];

export const defaultImageValues = {
  image: "",
};

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
  exam: false,
  date: "",
};

export const defaultTodoList = {
  description: "",
};
