import { apiSlice } from "api/apiSlice";

export const todolistsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodolists: builder.query({
      query: (subject) => ({
        url: `/api/todolists/${subject}/`,
        method: "GET",
      }),
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
      query: ({ id, subject }) => ({
        url: `/api/todolists/doned/${subject}/${id}/`,
        method: "PATCH",
      }),
      invalidatesTags: ["Todolists"],
    }),
  }),
});

export const {
  useGetTodolistsQuery,
  useEditTodolistMutation,
  useCreateTodolistMutation,
  useDeleteTodolistMutation,
  useDoneTodolistMutation,
} = todolistsApiSlice;
