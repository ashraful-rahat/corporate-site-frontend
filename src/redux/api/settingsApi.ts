import { baseApi } from '@/redux/api/baseApi';

export const settingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query<any, void>({
      query: () => ({
        url: '/settings',
        method: 'GET',
      }),
      providesTags: ['Settings'],
    }),
    updateSettings: builder.mutation<any, Partial<any>>({
      query: (data) => ({
        url: '/settings',
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      }),
      invalidatesTags: ['Settings'],
    }),
    uploadLogo: builder.mutation<any, { file: File; type: 'nav' | 'footer' }>({
      query: ({ file, type }) => {
        const formData = new FormData();
        formData.append('logo', file);
        formData.append('data', JSON.stringify({ type }));
        return {
          url: `/settings/${type}-logo`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['Settings'],
    }),
  }),
});

export const {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
  useUploadLogoMutation,
} = settingsApi; 