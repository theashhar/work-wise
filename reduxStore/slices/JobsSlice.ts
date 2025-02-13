import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://testapi.getlokalapp.com/common/' }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (page) => `jobs?page=${page}`,
      // Merge new jobs with existing jobs for infinite scroll
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Determine if more pages are available
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;