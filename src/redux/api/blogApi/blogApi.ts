import { baseApi } from "@/redux/api/baseApi";
import { IBlog } from "@/types/blog";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation<IBlog, Partial<IBlog> | FormData>({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["Blogs"],
    }),
    getAllBlogs: builder.query<{ data: IBlog[] }, void>({
      query: () => ({
        url: "/blogs",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((blog: any) => ({ type: "Blogs" as const, id: blog._id })),
              { type: "Blogs", id: "LIST" },
            ]
          : [{ type: "Blogs", id: "LIST" }],
    }),
    updateBlog: builder.mutation<IBlog, { id: string; data: Partial<IBlog> | FormData }>({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Blogs", id },
        { type: "Blogs", id: "LIST" },
      ],
    }),
    deleteBlog: builder.mutation<{ success: boolean }, { id: string }>({
      query: ({ id }) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Blogs", id },
        { type: "Blogs", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi; 