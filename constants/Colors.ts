const tintColorLight = '#1C1C1C';
const tintColorDark = '#FFF';

export const theme = '#FFBB00';

export const Colors = {
  theme: theme,
  light: {
    theme: theme, // Primary color (Yellow)
    bgSecondary: '#FFFFFF', // White background for secondary elements
    same: '#FFFFFF', // White for consistency
    invert: '#1C1C1C', // Dark text for light mode
    invertLight: '#363636', // Lighter dark text for subtlety
    text: '#1C1C1C', // Primary text color
    background: '#F5F5F5', // Light gray background
    tint: tintColorLight, // Dark tint for light mode
    icon: '#687076', // Gray for icons
    tabIconDefault: '#687076', // Gray for unselected tab icons
    tabIconSelected: tintColorLight, // Dark for selected tab icons
    accent: '#0A84FF', // Bright blue for accents (e.g., buttons, links)
    error: '#FF3B30', // Red for error messages
    success: '#4CD964', // Green for success messages
  },
  dark: {
    theme: theme, // Primary color (Yellow)
    bgSecondary: '#151718', // Dark background for secondary elements
    same: '#151718', // Dark for consistency
    invert: '#ECEDEE', // Light text for dark mode
    invertLight: '#CFCFCF', // Lighter text for subtlety
    text: '#ECEDEE', // Primary text color
    background: '#1C1C1C', // Dark background
    tint: tintColorDark, // Light tint for dark mode
    icon: '#9BA1A6', // Light gray for icons
    tabIconDefault: '#9BA1A6', // Light gray for unselected tab icons
    tabIconSelected: tintColorDark, // White for selected tab icons
    accent: '#0A84FF', // Bright blue for accents (e.g., buttons, links)
    error: '#FF453A', // Red for error messages
    success: '#30D158', // Green for success messages
  },
};