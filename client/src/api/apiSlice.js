import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.authData?.auth_token;
    console.log(getState().auth?.authData)
    console.log(`Token ${token}`)
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
