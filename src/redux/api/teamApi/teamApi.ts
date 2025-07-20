import { baseApi } from "@/redux/api/baseApi";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTeamMember: builder.mutation({
      query: (data) => ({
        url: "/team",
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["Teams"],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // If the mutation fails, the cache will be automatically reverted
        }
      },
    }),
    getAllTeamMembers: builder.query({
      query: () => ({
        url: "/team"
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }: any) => ({ type: 'Teams' as const, id: _id })),
              { type: 'Teams', id: 'LIST' },
            ]
          : [{ type: 'Teams', id: 'LIST' }],
    }),
    updateTeamMember: builder.mutation({
      query: ({ data, id }) => ({
        url: `/team/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Teams', id },
        { type: 'Teams', id: 'LIST' }
      ],
    }),
    deleteTeamMember: builder.mutation({
      query: ({ id }) => ({
        url: `/team/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Teams', id },
        { type: 'Teams', id: 'LIST' }
      ],
    }),
    addTeamBanner: builder.mutation({
      query: (data) => ({
        url: "team/banner",
        method: "POST",
        body: data,
        formData: true
      })
    }),
    getAllTeamBanner: builder.query({
      query: () => ({
        url: "team/banner",
        method: "GET",
      })
    }),
    updateTeamBanner: builder.mutation({
      query: ({id, data}) => ({
        url: "team/banner/"+ id,
        method: "PATCH",
        body: data,
        formData: true
      })
    }),
    deleteTeamBanner: builder.mutation({
      query: ({id}) => ({
        url: "team/banner/"+ id,
        method: "DELETE",
      })
    })
  }),
});

export const {
  useCreateTeamMemberMutation,
  useGetAllTeamMembersQuery,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
  useAddTeamBannerMutation,
  useGetAllTeamBannerQuery,
  useUpdateTeamBannerMutation,
  useDeleteTeamBannerMutation,
} = teamApi; 