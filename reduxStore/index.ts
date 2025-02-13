import { configureStore } from '@reduxjs/toolkit';
import { jobsApi } from './slices/JobsSlice';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bookmarksReducer from './slices/bookmarksSlice';

// Combine reducers
const rootReducer = combineReducers({
  [jobsApi.reducerPath]: jobsApi.reducer,
  bookmarks: bookmarksReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'], // Only persist the bookmarks slice
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore redux-persist actions
      },
    }).concat(jobsApi.middleware),
});

// Create persistor
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export default store;