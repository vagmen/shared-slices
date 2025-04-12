"use client";

import * as React from "react";
import { Box, Container } from "@mui/material";
import HeroContent from "../../components/HeroContent/HeroContent";
import { HeroSliceProps } from "./types";

const HeroSlice: React.FC<HeroSliceProps> = ({
  sx,
  containerProps,
  ...contentProps
}) => {
  return (
    <Box
      {...containerProps}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 10,
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        <HeroContent {...contentProps} centered={true} />
      </Container>
    </Box>
  );
};

export default HeroSlice;
