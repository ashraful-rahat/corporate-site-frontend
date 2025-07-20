import { baseApi } from "@/redux/api/baseApi";
import { User, CreateUserRequest, UpdateUserRequest, UserResponse, UsersResponse } from "@/types/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<UserResponse, CreateUserRequest>({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // If the mutation fails, the cache will be automatically reverted
        }
      },
    }),
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }: User) => ({ type: 'Users' as const, id: _id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getUserById: builder.query<UserResponse, string>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: (result, error, id) => [
        { type: 'Users', id },
      ],
    }),
    updateUser: builder.mutation<UserResponse, { data: UpdateUserRequest; id: string }>({
      query: ({ data, id }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Users', id },
        { type: 'Users', id: 'LIST' }
      ],
    }),
    deleteUser: builder.mutation<UserResponse, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Users', id },
        { type: 'Users', id: 'LIST' }
      ],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi; 