import { baseApi } from "../../api/base.api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data: any) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
        tags: ['auth'],
      }),
    }),
    login: builder.mutation({
      query: (data: any) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
        tags: ['auth'],
      }),
    }),
    verifyEmail: builder.mutation({
      query: (data: any) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body: data,
        tags: ['auth'],
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        tags: ['auth'],
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useVerifyEmailMutation } = authApi;
