import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://app-for-student.onrender.com",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.authData?.auth_token;
    if (token) {
      headers.set("authorization", `Token  ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Auth", "Subjects", "Subject", "Deadlines", "Notes", "Todolists"],
  endpoints: (builder) => ({}),
});
