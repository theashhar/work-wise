import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarkedJobs: [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const job = action.payload;
      const index = state.bookmarkedJobs.findIndex((j) => j.id === job.id);

      if (index === -1) {
        // Add job to bookmarks
        state.bookmarkedJobs.push(job);
      } else {
        // Remove job from bookmarks
        state.bookmarkedJobs.splice(index, 1);
      }
    },
  },
});

export const { toggleBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;