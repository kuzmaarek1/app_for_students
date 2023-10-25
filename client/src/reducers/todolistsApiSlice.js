import { apiSlice } from "api/apiSlice";

export const todolistsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodolistsDone: builder.query({
      query: ({ subject, page }) => ({
        url: `/api/todolists/done/${subject}/?page=${page}`,
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
      providesTags: ["Todolists", "Auth"],
    }),
    getTodolistsNotDone: builder.query({
      query: ({ subject, page }) => ({
        url: `/api/todolists/notDone/${subject}/?page=${page}`,
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
      providesTags: ["Todolists", "Auth"],
    }),
    createTodolist: builder.mutation({
      query: ({ data, subject }) => ({
        url: `/api/todolists/create/${subject}/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todolists"],
    }),
    editTodolist: builder.mutation({
      query: ({ id, data, subject }) => ({
        url: `/api/todolists/update/${subject}/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Todolists"],
    }),
    deleteTodolist: builder.mutation({
      query: ({ id, subject }) => ({
        url: `/api/todolists/delete/${subject}/${id}/`,
        method: "PUT",
      }),
      invalidatesTags: ["Todolists"],
    }),
    doneTodolist: builder.mutation({
      query: ({ id, subject, data }) => ({
        url: `/api/todolists/changeDoned/${subject}/${id}/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Todolists"],
    }),
  }),
});

export const {
  useGetTodolistsDoneQuery,
  useGetTodolistsNotDoneQuery,
  useEditTodolistMutation,
  useCreateTodolistMutation,
  useDeleteTodolistMutation,
  useDoneTodolistMutation,
} = todolistsApiSlice;
