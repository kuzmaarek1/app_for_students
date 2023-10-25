import { apiSlice } from "api/apiSlice";

export const deadlinesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDeadlines: builder.query({
      query: ({ subject, page }) => ({
        url: `/api/deadlines/${subject}/?page=${page}`,
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
      providesTags: ["Deadlines", "Auth"],
    }),
    createDeadline: builder.mutation({
      query: ({ data, subject }) => ({
        url: `/api/deadlines/create/${subject}/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Deadlines"],
    }),
    editDeadline: builder.mutation({
      query: ({ id, data, subject }) => ({
        url: `/api/deadlines/update/${subject}/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Deadlines"],
    }),
    deleteDeadline: builder.mutation({
      query: ({ id, subject }) => ({
        url: `/api/deadlines/delete/${subject}/${id}/`,
        method: "PUT",
      }),
      invalidatesTags: ["Deadlines"],
    }),
  }),
});

export const {
  useGetDeadlinesQuery,
  useEditDeadlineMutation,
  useCreateDeadlineMutation,
  useDeleteDeadlineMutation,
} = deadlinesApiSlice;
