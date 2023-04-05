import { apiSlice } from "api/apiSlice";

export const subjectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubject: builder.query({
      query: () => ({
        url: "api/subjects/subject/",
        method: "GET",
      }),
      providesTags: ["Auth", "Subject"],
    }),
    getSubjects: builder.query({
      query: () => ({
        url: `/api/subjects/`,
        method: "GET",
      }),
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
      query: (name) => ({
        url: `api/subjects/search/?search=${name}`,
        method: "GET",
      }),
      async onQueryStarted({ name }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (name !== "") {
            dispatch(
              subjectsApiSlice.util.updateQueryData(
                "getSubjects",
                undefined,
                (draft) => data
              )
            );
          }
        } catch {}
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
