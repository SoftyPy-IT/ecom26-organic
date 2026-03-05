import { baseApi } from "../../api/base.api";

export const checkOutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<void, { data: any }>({
      query: ({ data }) => ({
        url: "/order/create",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["order"]
    }),
  }),
})

export const { useCreateOrderMutation } = checkOutApi
