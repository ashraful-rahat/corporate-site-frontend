/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { useAuthStore } from "../../store/store";

// Custom base query with token handling
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
  credentials: "include",
  prepareHeaders: (headers) => {
    // Get token from Zustand store
    const token = useAuthStore.getState().getToken();
    if (token) {
      // Make sure to include 'Bearer ' prefix if your API expects it
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [
    "Services",
    "Solutions",
    "Teams",
    "Hiring",
    "Applications",
    "Works",
    "Blogs",
    "Settings",
    "Feedbacks",
    "Users",
    "Products"
  ],
});