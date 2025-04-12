"use client";

import * as React from "react";
import { Box, Typography, SxProps, Theme } from "@mui/material";
import { getTonalColors } from "../../theme/utils";

export interface TagProps {
  text: string;
  emoji?: string;
  clickable?: boolean;
  sx?: SxProps<Theme>;
}

const Tag: React.FC<TagProps> = ({ text, emoji, clickable = false, sx }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        bgcolor: (theme: Theme) => getTonalColors(theme).main,
        borderRadius: 1,
        px: 1.5,
        py: 0.75,
        transition: "all 0.2s ease-in-out",
        ...(clickable && {
          cursor: "pointer",
          "&:hover": {
            bgcolor: (theme: Theme) => getTonalColors(theme).hover,
            transform: "translateY(-1px)",
          },
        }),
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
          color: (theme: Theme) => getTonalColors(theme).text,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Tag;
