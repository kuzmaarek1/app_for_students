import { apiSlice } from "api/apiSlice";

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: ({ subject, page }) => ({
        url: `/api/notes/${subject}/?page=${page}`,
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
      providesTags: ["Notes", "Auth"],
    }),
    getNote: builder.query({
      query: ({ subject, id }) => ({
        url: `/api/notes/note/${subject}/${id}/`,
        method: "GET",
      }),
      providesTags: ["Notes"],
    }),
    createNote: builder.mutation({
      query: ({ data, subject }) => ({
        url: `/api/notes/create/${subject}/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notes"],
    }),
    searchNote: builder.query({
      query: ({ name, subject, page }) => ({
        url: `/api/notes/search/${subject}/?search=${name}&page=${page}`,
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
    editNote: builder.mutation({
      query: ({ id, data, subject }) => ({
        url: `/api/notes/update/${subject}/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Notes"],
    }),
    deleteNote: builder.mutation({
      query: ({ id, subject }) => ({
        url: `/api/notes/delete/${subject}/${id}/`,
        method: "PUT",
      }),
      invalidatesTags: ["Notes"],
    }),
    addImage: builder.mutation({
      query: ({ subject, id, data }) => ({
        url: `/api/notes/image/${subject}/${id}/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Notes"],
    }),
    deleteImage: builder.mutation({
      query: (id) => ({
        url: `/api/notes/delete_image/${id}/`,
        method: "PATCH",
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
  useAddImageMutation,
  useDeleteImageMutation,
} = notesApiSlice;
