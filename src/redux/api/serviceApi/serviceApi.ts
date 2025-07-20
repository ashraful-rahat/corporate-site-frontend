/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
  
 

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["Services"],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // If the mutation fails, the cache will be automatically reverted
        }
      },
    }),
    getAllServices: builder.query({
        query: () => ({
            url: "/services"
        }),
        providesTags: (result) =>
          result
            ? [
                ...result.data.map(({ _id }: any) => ({ type: 'Services' as const, id: _id })),
                { type: 'Services', id: 'LIST' },
              ]
            : [{ type: 'Services', id: 'LIST' }],
    }),
    updateService: builder.mutation({
      query: ({ data, id }) => ({
        url: `/services/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Services', id },
        { type: 'Services', id: 'LIST' }
      ],
    }),
    deleteService: builder.mutation({
      query: ({ id }) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Services', id },
        { type: 'Services', id: 'LIST' }
      ],
    }),
    getServiceById: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
      }),
      providesTags: (result, error, id) => [
        { type: 'Services', id },
      ],
    }),
}), 
});

export const {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;