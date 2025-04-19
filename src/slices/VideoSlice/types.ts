import { Theme, SxProps } from "@mui/material";
import { ComponentProps } from "react";
import { Box } from "@mui/material";

export interface VideoSliceProps {
  video: string;
  poster?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  my?: number;
  sx?: SxProps<Theme>;
  containerProps?: ComponentProps<typeof Box>;
  caption?: string;
}
