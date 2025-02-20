"use client";

import * as React from "react";
import { Box, Theme, SxProps, Typography, Button } from "@mui/material";
import { Tag } from "../../components";

export interface HeroSliceProps {
  sx?: SxProps<Theme>;
  containerProps?: React.ComponentProps<typeof Box>;
  title: React.ReactNode;
  description: string;
  buttons: Array<{
    text: string;
    onClick?: () => void;
    variant?: "text" | "contained" | "outlined";
    color?: "primary" | "secondary" | "inherit";
  }>;
  tags?: Array<{
    emoji?: string;
    // icon?: React.ReactNode;
    text: string;
  }>;
}

export const HeroSlice: React.FC<HeroSliceProps> = ({
  sx,
  containerProps,
  title,
  description,
  buttons,
  tags,
}) => {
  return (
    <Box
      {...containerProps}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: 8,
        px: 2,
        ...sx,
      }}
    >
      {tags && (
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          {tags.map((tag, index) => (
            <Tag key={index} emoji={tag.emoji} text={tag.text} />
          ))}
        </Box>
      )}

      <Typography variant="h2" component="h1" sx={{ mb: 3 }}>
        {title}
      </Typography>

      <Typography
        variant="h6"
        sx={{ mb: 4, maxWidth: 800, textWrap: "balance" }}
      >
        {description}
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant || "outlined"}
            color={button.color || "primary"}
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
