/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

export const solutionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSolution: builder.mutation({
      query: (data) => ({
        url: "/solutions",
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["Solutions"],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // If the mutation fails, the cache will be automatically reverted
        }
      },
    }),
    getAllSolutions: builder.query({
      query: () => ({
        url: "/solutions"
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }: any) => ({ type: 'Solutions' as const, id: _id })),
              { type: 'Solutions', id: 'LIST' },
            ]
          : [{ type: 'Solutions', id: 'LIST' }],
    }),
    updateSolution: builder.mutation({
      query: ({ data, id }) => ({
        url: `/solutions/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Solutions', id },
        { type: 'Solutions', id: 'LIST' }
      ],
    }),
    deleteSolution: builder.mutation({
      query: ({ id }) => ({
        url: `/solutions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Solutions', id },
        { type: 'Solutions', id: 'LIST' }
      ],
    }),
    getSolutionById: builder.query({
      query: (id) => ({
        url: `/solutions/${id}`,
      }),
      providesTags: (result, error, id) => [
        { type: 'Solutions', id },
      ],
    }),
  }),
});

export const {
  useCreateSolutionMutation,
  useGetAllSolutionsQuery,
  useGetSolutionByIdQuery,
  useUpdateSolutionMutation,
  useDeleteSolutionMutation,
} = solutionApi; 