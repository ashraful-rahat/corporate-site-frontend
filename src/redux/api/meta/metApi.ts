import { baseApi } from "@/redux/api/baseApi";

export const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetaData: builder.query({
      query: () => ({
        url: "/meta"
      }),
    }),
  }),
});

export const {
  useGetMetaDataQuery,
} = metaApi;