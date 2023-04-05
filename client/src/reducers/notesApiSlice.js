import { apiSlice } from "api/apiSlice";

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: (subject) => ({
        url: `/api/notes/${subject}`,
        method: "GET",
      }),
      providesTags: ["Notes", "Auth"],
    }),
    createNote: builder.mutation({
      query: ({ data, subject }) => ({
        url: `/api/notes/create/${subject}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notes"],
    }),
    searchNote: builder.query({
      query: ({ name, subject }) => ({
        url: `/api/notes/search/${subject}/?search=${name}`,
        method: "GET",
      }),
      async onQueryStarted({ name }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (name !== "") {
            dispatch(
              notesApiSlice.util.updateQueryData(
                "getNotes",
                undefined,
                (draft) => data
              )
            );
          }
        } catch {}
      },
    }),
    editNote: builder.mutation({
      query: ({ id, data, subject }) => ({
        url: `/api/notes/update/${subject}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Notes"],
    }),
    deleteNote: builder.mutation({
      query: ({ id, subject }) => ({
        url: `/api/notes/delete/${subject}/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Notes"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useSearchNoteQuery,
  useEditNoteMutation,
  useCreateNoteMutation,
  useDeleteNoteMutation,
} = notesApiSlice;
