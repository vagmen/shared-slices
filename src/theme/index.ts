import { createTheme, ThemeOptions, alpha } from "@mui/material/styles";
import { borderRadius } from "./borderRadius";

const baseThemeOptions: ThemeOptions & { cssVariables: boolean } = {
  cssVariables: true,
  customBorderRadius: borderRadius,
  palette: {
    primary: {
      main: "#5C6933",
      light: alpha("#5C6933", 0.2),
      contrastText: "#5C6933",
    },
    secondary: {
      main: "#66BB6A",
    },
  },
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          padding: "12px 32px",
          fontSize: "0.875rem",
          fontWeight: 500,
          textTransform: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(63, 71, 34, 0.15)",
          },
        },
        contained: {
          boxShadow: "0 4px 10px rgba(63, 71, 34, 0.1)",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
    allVariants: {
      color: "rgba(0, 0, 0, 0.87)",
    },
    h1: {
      fontWeight: 500,
      fontSize: "2.5rem",
      [`@media (min-width:600px)`]: {
        fontSize: "3rem",
      },
      [`@media (min-width:900px)`]: {
        fontSize: "3.5rem",
      },
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 500,
      fontSize: "2rem",
      [`@media (min-width:600px)`]: {
        fontSize: "2.5rem",
      },
      [`@media (min-width:900px)`]: {
        fontSize: "3rem",
      },
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
  },
};

// 3F4722
// альтернативы 4CAF50
// альтернативы 66BB6A
// осветлить исходный 5C6933

export const createUrmanTheme = (customOptions?: ThemeOptions) => {
  return createTheme({
    ...baseThemeOptions,
    ...customOptions,
    components: {
      ...baseThemeOptions.components,
      ...customOptions?.components,
    },
    palette: {
      ...baseThemeOptions.palette,
      ...customOptions?.palette,
    },
    typography: {
      ...baseThemeOptions.typography,
      ...customOptions?.typography,
    },
    shape: {
      ...baseThemeOptions.shape,
      ...customOptions?.shape,
    },
  } as ThemeOptions);
};

export const defaultUrmanTheme = createUrmanTheme();
