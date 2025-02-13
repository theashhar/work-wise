import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://testapi.getlokalapp.com/common/' }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (page) => `jobs?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        if (!currentCache.results) {
          currentCache.results = []; // Ensure results array exists
        }
        if (newItems.results.length > 0) {
          currentCache.results.push(...newItems.results);
        }
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
      transformResponse: (response) => ({
        results: response.results || [],
        hasMore: response.results.length > 0, // Stop fetching when no more data
      }),
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
