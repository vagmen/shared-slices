import { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

/**
 * Получает тональные цвета на основе primary или secondary цвета темы
 * @param theme Тема Material-UI
 * @param key Ключ палитры ("primary" или "secondary")
 * @returns Объект с тональными цветами
 */
export const getTonalColors = (
  theme: Theme,
  key: "primary" | "secondary" = "primary"
) => {
  const baseColor = theme.palette[key].main;

  return {
    main: alpha(baseColor, 0.12),
    hover: alpha(baseColor, 0.2),
    text: baseColor,
  };
};

/**
 * Преобразует значение borderRadius из темы в строку с пикселями
 * @param theme Тема Material-UI
 * @returns Строка с значением в пикселях
 */
export const getBorderRadius = (theme: Theme) =>
  `${theme.shape.borderRadius}px`;
