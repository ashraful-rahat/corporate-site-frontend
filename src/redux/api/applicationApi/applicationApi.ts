
import { baseApi } from "@/redux/api/baseApi";

export const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (data) => ({
        url: "/application",
        method: "POST",
        body: data,
        formData: true,  
      }),
      invalidatesTags: ["Applications"],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // If the mutation fails, the cache will be automatically reverted
        }
      },
    }),
    getAllApplications: builder.query({
      query: () => ({
        url: "/application"
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }: any) => ({ type: 'Applications' as const, id: _id })),
              { type: 'Applications', id: 'LIST' },
            ]
          : [{ type: 'Applications', id: 'LIST' }],
    }),
    updateApplication: builder.mutation({
      query: ({ data, id }) => ({
        url: `/applications/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Applications', id },
        { type: 'Applications', id: 'LIST' }
      ],
    }),
    deleteApplication: builder.mutation({
      query: ({ id }) => ({
        url: `/application/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Applications', id },
        { type: 'Applications', id: 'LIST' }
      ],
    }),
  }),
});

export const {
  useCreateApplicationMutation,
  useGetAllApplicationsQuery,
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
} = applicationApi; 