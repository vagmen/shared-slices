import { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

/**
 * Получает тональные цвета на основе primary цвета темы
 * @param theme Тема Material-UI
 * @returns Объект с тональными цветами
 */
export const getTonalColors = (theme: Theme) => {
  const primaryColor = theme.palette.primary.main;

  return {
    main: alpha(primaryColor, 0.12),
    hover: alpha(primaryColor, 0.2),
    text: primaryColor,
  };
};
