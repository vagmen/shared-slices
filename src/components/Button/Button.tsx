"use client";

import * as React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useUrmanComponents } from "../UrmanProvider/UrmanProvider";

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: "text" | "contained" | "outlined" | "tonal" | "link";
  onClick?: () => void;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  sx,
  ...props
}) => {
  const { LinkComponent: ContextLinkComponent } = useUrmanComponents();

  const getStyles = (): SxProps<Theme> => ({
    textTransform: "none",
    fontWeight: 500,
    padding: "10px 24px",
    ...(variant === "tonal" && {
      bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.12),
      "&:hover": {
        bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.2),
      },
    }),
    ...(variant === "link" && {
      p: "6px 8px",
      minWidth: "auto",

      textDecoration: "underline",
      "&:hover": {
        bgcolor: "transparent",
        boxShadow: "none",
      },
    }),
    ...sx,
  });

  const muiVariant =
    variant === "link" || variant === "tonal" ? "text" : variant;

  return (
    <MuiButton
      {...props}
      variant={muiVariant}
      sx={getStyles()}
      {...(ContextLinkComponent ? { component: ContextLinkComponent } : {})}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
