import { configureStore } from '@reduxjs/toolkit';
import { jobsApi } from './slices/JobsSlice';

const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

export default store;