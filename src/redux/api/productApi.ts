import { baseApi } from "./baseApi";
import { IProduct } from "@/types/product";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: "/products",
        method: "GET",

      }),
      providesTags: ["Products"],
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
      transformResponse: (response: { data: IProduct }) => response.data,
    }),
    createProduct: builder.mutation<IProduct, FormData>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation<IProduct, { id: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation<{ success: boolean }, { id: string }>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi; 