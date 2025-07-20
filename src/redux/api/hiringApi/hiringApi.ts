import { baseApi } from "@/redux/api/baseApi";

export const hiringApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createHiring: builder.mutation({
      query: (data) => ({
        url: "/hiring",
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["Hiring"],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // If the mutation fails, the cache will be automatically reverted
        }
      },
    }),
    getAllHiring: builder.query({
      query: () => ({
        url: "/hiring"
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }: any) => ({ type: 'Hiring' as const, id: _id })),
              { type: 'Hiring', id: 'LIST' },
            ]
          : [{ type: 'Hiring', id: 'LIST' }],
    }),
    updateHiring: builder.mutation({
      query: ({ data, id }) => ({
        url: `/hiring/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Hiring', id },
        { type: 'Hiring', id: 'LIST' }
      ],
    }),
    deleteHiring: builder.mutation({
      query: ({ id }) => ({
        url: `/hiring/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Hiring', id },
        { type: 'Hiring', id: 'LIST' }
      ],
    }),
    getHiringById: builder.query({
      query: (id) => ({
        url: `/hiring/${id}`,
      }),
      providesTags: (result, error, id) => [
        { type: 'Hiring', id },
      ],
    }),
  }),
});

export const {
  useCreateHiringMutation,
  useGetAllHiringQuery,
  useGetHiringByIdQuery,
  useUpdateHiringMutation,
  useDeleteHiringMutation,
} = hiringApi;