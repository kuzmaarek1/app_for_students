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
    addSubject: builder.query({
      query: (data) => ({
        url: `/api/subjects/create/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subjects"],
    }),
    searchTeam: builder.query({
      query: (name) => ({
        url: `subjects/search/?search=${name}`,
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
    editTeam: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/subjects/update/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Subjects"],
    }),
    deleteTeam: builder.mutation({
      query: ({ id, teams }) => ({
        url: `/api/subjects/delete/${id}/`,
        method: "PUT",
      }),
    }),
    invalidatesTags: ["Subject", "Subjects"],
  }),
});

export const {
  useGetSubjectQuery,
  useGetSubjectsQuery,
  useSearchSubjectQuery,
  useEditSubjectMutation,
  useAddSubjectMutation,
  useDeleteSubjectMutation,
} = subjectsApiSlice;
