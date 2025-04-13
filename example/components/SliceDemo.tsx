import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface SliceDemoProps {
  title: string;
  children: React.ReactNode;
}

export const SliceDemo: React.FC<SliceDemoProps> = ({ title, children }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Paper
        sx={{
          p: 0,
          boxShadow: 0,
          border: "1px solid #E0E0E0",
          backgroundColor: "#fff",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};
