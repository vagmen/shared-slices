import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface ComponentDemoProps {
  title: string;
  children: React.ReactNode;
}

export const ComponentDemo: React.FC<ComponentDemoProps> = ({
  title,
  children,
}) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Paper sx={{ p: 4, borderRadius: 6, boxShadow: 0 }}>{children}</Paper>
    </Box>
  );
};
