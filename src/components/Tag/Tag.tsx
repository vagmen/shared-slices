"use client";

import * as React from "react";
import { Box, Typography, Theme, SxProps } from "@mui/material";

export interface TagProps {
  text: string;
  emoji?: string;
  sx?: SxProps<Theme>;
}

export const Tag: React.FC<TagProps> = ({ text, emoji, sx }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "rgba(var(--mui-palette-primary-mainChannel) / 0.1)", // 10% прозрачности от основного цвета #5C6933
        borderRadius: 4,
        px: 2,
        py: 1,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          bgcolor: "rgba(var(--mui-palette-primary-mainChannel) / 0.2)", // 20% прозрачности от основного цвета #5C6933
          transform: "translateY(-1px)",
        },
        ...sx,
      }}
    >
      {emoji && (
        <Typography
          component="span"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1,
          }}
        >
          {emoji}
        </Typography>
      )}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          lineHeight: 1,
          color: "primary.main",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
