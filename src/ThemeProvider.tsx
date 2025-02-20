"use client";

import React from "react";
import { ThemeProvider, Theme } from "@mui/material/styles";
import { defaultUrmanTheme } from "./theme";

interface UrmanThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const UrmanThemeProvider: React.FC<UrmanThemeProviderProps> = ({
  theme = defaultUrmanTheme,
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
