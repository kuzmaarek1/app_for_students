import { apiSlice } from "api/apiSlice";

export const subjectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubject: builder.query({
      query: () => ({
        url: "/api/subjects/subject/",
        method: "GET",
      }),
      providesTags: ["Auth", "Subject"],
    }),
    getSubjects: builder.query({
      query: ({ page }) => ({
        url: `/api/subjects/?page=${page}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        if (Number(newItems.page) !== 1)
          currentCache.results.push(...newItems.results);
        else currentCache.results = newItems.results;
        currentCache.has_next = newItems.has_next;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ["Subjects", "Auth"],
    }),
    createSubject: builder.mutation({
      query: (data) => ({
        url: `/api/subjects/create/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subjects"],
    }),
    searchSubject: builder.query({
      query: ({ name, page }) => ({
        url: `/api/subjects/search/?search=${name}&page=${page}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        if (Number(newItems.page) !== 1)
          currentCache.results.push(...newItems.results);
        else currentCache.results = newItems.results;
        currentCache.has_next = newItems.has_next;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    editSubject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/subjects/update/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Subjects"],
    }),
    deleteSubject: builder.mutation({
      query: ({ id }) => ({
        url: `/api/subjects/delete/${id}/`,
        method: "PUT",
      }),
      invalidatesTags: ["Subject", "Subjects"],
    }),
  }),
});

export const {
  useGetSubjectQuery,
  useGetSubjectsQuery,
  useSearchSubjectQuery,
  useEditSubjectMutation,
  useCreateSubjectMutation,
  useDeleteSubjectMutation,
} = subjectsApiSlice;
