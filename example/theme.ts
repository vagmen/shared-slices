import { createTheme, ThemeOptions } from "@mui/material";

export const createCustomTheme = (options?: ThemeOptions) =>
  createTheme({
    palette: {
      primary: {
        main: "#5C6933",
      },
      secondary: {
        main: "#4CAF50",
      },
    },
    typography: {
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 500,
      },
      h2: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 400,
      },
    },
    ...options,
  });

// 3F4722
// альтернативы 4CAF50
// альтернативы 66BB6A

// осветлить исходный 5C6933
