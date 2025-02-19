import React from "react";
import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material";
import { defaultUrmanTheme } from "./theme";

interface UrmanThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const UrmanThemeProvider: React.FC<UrmanThemeProviderProps> = ({
  theme = defaultUrmanTheme,
  children,
}) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
