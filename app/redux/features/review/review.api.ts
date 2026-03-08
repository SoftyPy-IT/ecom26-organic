import { baseApi } from "../../api/base.api";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/review/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateReviewMutation } = reviewApi;
