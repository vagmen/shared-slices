"use client";

import React from "react";
import { ThemeProvider as MuiThemeProvider, Theme } from "@mui/material/styles";
import { defaultUrmanTheme } from "./theme";

/**
 * Пропсы для UrmanThemeProvider
 */
interface UrmanThemeProviderProps {
  /**
   * Кастомная тема, которая будет объединена с темой библиотеки.
   * Если не указана, будет использована тема по умолчанию.
   */
  theme?: Theme;
  /**
   * Дочерние компоненты
   */
  children: React.ReactNode;
}

/**
 * Провайдер темы для компонентов библиотеки.
 * Позволяет использовать стили библиотеки и переопределять их при необходимости.
 */
export const UrmanThemeProvider: React.FC<UrmanThemeProviderProps> = ({
  theme = defaultUrmanTheme,
  children,
}) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
