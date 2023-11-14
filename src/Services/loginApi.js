import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/",
    credentials: "include",
  }),
  reducerPath: "loginApi",
  endpoints: (builder) => ({
    getLoginData: builder.query({
      query: () => ({
        url: `/auth/login/success`,
        method: "GET",
      }),
    }),
    checkLogin: builder.mutation({
      query: () => ({
        url: `/auth/google/callback`,
        method: "GET",
      }),
    }),
    checkLogout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetLoginDataQuery,
  useCheckLoginMutation,
  useCheckLogoutMutation,
} = loginApi;
