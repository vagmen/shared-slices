"use client";

import { Box } from "@mui/material";
import * as React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
}) => (
  <Box component="span" sx={{ color: "primary.main" }}>
    {children}
  </Box>
);
