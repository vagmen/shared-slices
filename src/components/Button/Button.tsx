"use client";

import * as React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
} from "@mui/material";
import { useUrmanComponents } from "../UrmanProvider/UrmanProvider";
import { getTonalColors } from "../../theme/utils";

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: "text" | "contained" | "outlined" | "tonal" | "link";
  onClick?: () => void;
  href?: string;
  target?: string;
  size?: "small" | "medium" | "large";
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
    ...(props.size === "small" && {
      padding: "6px 16px",
      fontSize: "0.8125rem",
    }),
    ...(props.size === "medium" && {
      padding: "10px 24px",
      fontSize: "0.875rem",
    }),
    ...(props.size === "large" && {
      padding: "14px 32px",
      fontSize: "1rem",
    }),
    ...(variant === "contained" && {
      color: "#fff",
      "&:hover": {
        color: "#fff",
      },
    }),
    ...(variant === "tonal" && {
      bgcolor: (theme: Theme) => getTonalColors(theme).main,
      color: (theme: Theme) => getTonalColors(theme).text,
      "&:hover": {
        bgcolor: (theme: Theme) => getTonalColors(theme).hover,
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
      {...(props.href && ContextLinkComponent
        ? { component: ContextLinkComponent, href: props.href }
        : {})}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
