"use client";

import * as React from "react";
import { Box, Theme, SxProps, Container } from "@mui/material";

export interface VideoSliceProps {
  video: string;
  poster?: string;
  sx?: SxProps<Theme>;
  containerProps?: React.ComponentProps<typeof Box>;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  my?: number;
}

const VideoSlice: React.FC<VideoSliceProps> = ({
  video,
  poster,
  sx,
  containerProps,
  maxWidth = "lg",
  my = 4,
}) => {
  // Если URL пустой, не рендерим видео
  if (!video) {
    return null;
  }

  // Определяем тип видео
  const isYouTube = video.includes("youtube.com") || video.includes("youtu.be");
  const isVimeo = video.includes("vimeo.com");

  // Получаем ID видео из YouTube URL
  const getYouTubeVideoId = (url: string) => {
    try {
      if (url.includes("youtube.com")) {
        const params = new URL(url).searchParams;
        return params.get("v");
      } else if (url.includes("youtu.be")) {
        return url.split("/").pop();
      }
    } catch (e) {
      console.error("Ошибка при парсинге YouTube URL:", e);
    }
    return null;
  };

  return (
    <Box sx={{ my }}>
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
          {isYouTube ? (
            <Box
              component="iframe"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(video)}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ) : isVimeo ? (
            <Box
              component="iframe"
              src={video.replace("vimeo.com", "player.vimeo.com/video")}
              allow="autoplay; fullscreen"
              allowFullScreen
              sx={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
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
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSlice;
