import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";

const baseThemeOptions: ThemeOptions & { cssVariables: boolean } = {
  cssVariables: true,
  palette: {
    primary: {
      main: "#5C6933",
    },
    secondary: {
      main: "#66BB6A",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100, // делаем кнопку округлой
          padding: "12px 32px", // увеличиваем padding
          fontSize: "0.875rem",
          fontWeight: 500,
          textTransform: "none", // отключаем автоматический uppercase
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
      color: "rgba(0, 0, 0, 0.87)", // стандартный цвет MUI
      // или можно использовать более мягкий вариант
      // color: '#2C2C2C', // темно-серый
    },
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
  } as ThemeOptions);
};

export const defaultUrmanTheme = createUrmanTheme();
