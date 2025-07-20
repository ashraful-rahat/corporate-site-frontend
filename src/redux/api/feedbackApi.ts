import { baseApi } from "@/redux/api/baseApi";
import { IClientFeedback } from "@/types/feedback";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation<IClientFeedback, Partial<IClientFeedback> | FormData>({
      query: (data) => ({
        url: "/feedbacks",
        method: "POST",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["Feedbacks"],
    }),
    getAllFeedbacks: builder.query<{ data: IClientFeedback[] }, void>({
      query: () => ({
        url: "/feedbacks",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((item: any) => ({ type: "Feedbacks" as const, id: item._id })),
              { type: "Feedbacks", id: "LIST" },
            ]
          : [{ type: "Feedbacks", id: "LIST" }],
    }),
    updateFeedback: builder.mutation<IClientFeedback, { id: string; data: Partial<IClientFeedback> | FormData }>({
      query: ({ id, data }) => ({
        url: `/feedbacks/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Feedbacks", id },
        { type: "Feedbacks", id: "LIST" },
      ],
    }),
    deleteFeedback: builder.mutation<{ success: boolean }, { id: string }>({
      query: ({ id }) => ({
        url: `/feedbacks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Feedbacks", id },
        { type: "Feedbacks", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useCreateFeedbackMutation,
  useGetAllFeedbacksQuery,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedbackApi; 