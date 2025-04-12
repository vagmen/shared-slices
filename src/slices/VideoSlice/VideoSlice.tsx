"use client";

import React from 'react';
import { Box, Container } from '@mui/material';
import { VideoSliceProps } from './types';

export default function VideoSlice({
  video,
  poster,
  maxWidth = 'lg',
  my = 4,
  sx,
  containerProps,
}: VideoSliceProps) {
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
    <Container maxWidth={maxWidth} sx={{ my, ...sx }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9 Aspect Ratio
          backgroundColor: 'grey.100',
          borderRadius: 1,
          overflow: 'hidden',
          ...containerProps?.sx,
        }}
        {...containerProps}
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
          <video
            src={video}
            poster={poster}
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
      </Box>
    </Container>
  );
}
