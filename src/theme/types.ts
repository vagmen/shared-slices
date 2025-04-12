import "@mui/material/styles";
import { borderRadius } from "./borderRadius";

declare module "@mui/material/styles" {
  interface Palette {
    // Удаляем tonal из интерфейса Palette
  }

  interface PaletteOptions {
    // Удаляем tonal из интерфейса PaletteOptions
  }

  interface Theme {
    customBorderRadius: typeof borderRadius;
  }

  interface ThemeOptions {
    customBorderRadius?: typeof borderRadius;
  }
}
