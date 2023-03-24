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

export const defaultValues = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  re_password: "",
};
