import { baseApi } from "@/redux/api/baseApi";

export const worksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWork: builder.mutation({
      query: (data) => ({
        url: "/works",
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["Works"],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // If the mutation fails, the cache will be automatically reverted
        }
      },
    }),
    getAllWorks: builder.query({
      query: () => ({
        url: "/works"
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }: any) => ({ type: 'Works' as const, id: _id })),
              { type: 'Works', id: 'LIST' },
            ]
          : [{ type: 'Works', id: 'LIST' }],
    }),
    updateWork: builder.mutation({
      query: ({ data, id }) => ({
        url: `/works/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Works', id },
        { type: 'Works', id: 'LIST' }
      ],
    }),
    deleteWork: builder.mutation({
      query: ({ id }) => ({
        url: `/works/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Works', id },
        { type: 'Works', id: 'LIST' }
      ],
    }),
    getWorkById: builder.query({
      query: (id) => ({
        url: `/works/${id}`,
      }),
      providesTags: (result, error, id) => [
        { type: 'Works', id },
      ],
    }),
  }),
});

export const {
  useCreateWorkMutation,
  useGetAllWorksQuery,
  useGetWorkByIdQuery,
  useUpdateWorkMutation,
  useDeleteWorkMutation,

} = worksApi; 