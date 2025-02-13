# WorkWise

WorkWise is a job listing mobile application built with React Native and Expo. It allows users to browse job listings, view job details, and bookmark jobs for offline access. The app features a bottom navigation UI with "Jobs" and "Bookmarks" sections.

## Features

- **Bottom Navigation**: Two main sections - Jobs and Bookmarks.
- **Infinite Scroll**: The Jobs screen fetches job data continuously as the user scrolls.
- **Job Details**: Clicking on a job card opens a detailed view.
- **Bookmarking**: Users can bookmark jobs for later viewing.
- **Offline Support**: Bookmarked jobs are stored in local storage for offline access.
- **State Management**: Handles loading, error, and empty states appropriately.

## Screenshots

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; border-radius:10px;">

  <img src="assets/images/ss1.png" width="190" />
  <img src="assets/images/ss2.png" width="190" />
  <img src="assets/images/ss3.png" width="190" />
  <img src="assets/images/ss4.png" width="190" />
  <img src="assets/images/ss5.png" width="190" />
  <img src="assets/images/ss6.png" width="190" />

</div>

## Tech Stack

- **Framework**: React Native (Expo)
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation (Bottom Tabs)
- **Data Storage**: Async Storage (for bookmarks)
- **UI Styling**: Tailwind CSS & NativeWind

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/workwise.git
   cd workwise
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   - To run on Android: `npm run android`
   - To run on iOS: `npm run ios`
   - To run on Web: `npm run web`

## Folder Structure

```
workwise/
├── app/                     # Application screens & navigation
│   ├── (main)/              # Main application screens
│   │   ├── jobDetails.tsx   # Job details screen
│   ├── (tabs)/              # Tab navigation screens
│   │   ├── _layout.tsx      # Layout for tabs
│   │   ├── bookmark.tsx     # Bookmarks screen
│   │   ├── index.tsx        # Main jobs screen
│   ├── _layout.tsx          # Root layout
│   ├── +not-found.tsx       # 404 screen
├── assets/                  # Static assets (fonts, images)
├── components/              # Reusable UI components
├── constants/               # Constants & dummy data
│   ├── Colors.ts            # Color theme constants
│   ├── dummy.ts             # Dummy data for testing
├── hooks/                   # Custom React hooks
├── reduxStore/              # Redux store setup
│   ├── slices/              # Redux slices
│   │   ├── bookmarksSlice.ts # Bookmark state management
│   │   ├── JobsSlice.ts      # Job listings state management
│   ├── index.ts             # Root Redux store configuration
├── scripts/                 # Utility scripts
```

## API Integration

The app fetches job listings via an external API and displays job details including:
- **Title**
- **Location**
- **Salary**
- **Phone Contact**
- **Images**
- **Job Type**
- **Phone Number**
- **more**

## State Management

- Redux Toolkit is used for managing application state.
- Redux Persist ensures bookmarked jobs remain saved even after app restarts.

## Dependencies

```json
{
  "@expo/vector-icons": "^14.0.2",
  "@react-native-async-storage/async-storage": "^2.1.1",
  "@react-navigation/bottom-tabs": "^7.2.0",
  "@react-navigation/native": "^7.0.14",
  "@reduxjs/toolkit": "^2.5.1",
  "expo": "~52.0.33",
  "react-native": "0.76.7",
  "react-redux": "^9.2.0",
  "redux-persist": "^6.0.0",
  "tailwindcss": "^3.4.17"
}
```

## Contributing

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

