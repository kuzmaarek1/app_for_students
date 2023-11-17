import { apiSlice } from "api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "/api/token/login/",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    signInWithSocialMedia: builder.mutation({
      query: (credentials) => ({
        url: "/api/signInWithSocialMedia/",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["AuthSocialMedia"],
    }),
    getUser: builder.query({
      query: () => ({
        url: "/api/users/me/",
        method: "GET",
      }),
      providesTags: ["Auth", "AuthSocialMedia"],
    }),
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/api/token/logout/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useGetUserQuery,
  useSignUpMutation,
  useLogOutMutation,
  useSignInWithSocialMediaMutation,
} = authApiSlice;
