import * as React from "react";
import { Box, Theme, SxProps, Container } from "@mui/material";

export interface VideoSliceProps {
  video: string;
  poster?: string;
  sx?: SxProps<Theme>;
  containerProps?: React.ComponentProps<typeof Box>;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

export const VideoSlice: React.FC<VideoSliceProps> = ({
  video,
  poster,
  sx,
  containerProps,
  maxWidth = "lg",
}) => {
  return (
    <Container maxWidth={maxWidth}>
      <Box
        {...containerProps}
        sx={{
          width: "100%",
          position: "relative",
          paddingTop: "56.25%", // Соотношение сторон 16:9
          overflow: "hidden",
          borderRadius: 6,
          ...sx,
        }}
      >
        <Box
          component="video"
          controls
          poster={poster}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      </Box>
    </Container>
  );
};
