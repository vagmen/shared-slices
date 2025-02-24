import * as React from "react";
import { Box, Typography } from "@mui/material";
import Tag from "../Tag/Tag";
import { HeroContentProps } from "./types";
import Button from "../Button/Button";

const HeroContent: React.FC<HeroContentProps> = ({
  sx,
  title,
  description,
  buttons,
  tags,
  titleVariant = "h2",
  centered = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: centered ? "center" : "flex-start",
        textAlign: centered ? "center" : "left",
        ...sx,
      }}
    >
      {tags && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 4,
            justifyContent: centered ? "center" : "flex-start",
          }}
        >
          {tags.map((tag, index) => (
            <Tag key={index} emoji={tag.emoji} text={tag.text} />
          ))}
        </Box>
      )}

      <Typography
        variant={titleVariant}
        component={titleVariant}
        sx={{ mb: 3, textWrap: "balance" }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: 800,
          textWrap: "balance",
          fontSize: {
            xs: "1.125rem", // 18px
            sm: "1.25rem", // 20px
          },
        }}
      >
        {description}
      </Typography>

      {buttons && (
        <Box sx={{ display: "flex", gap: 2 }}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || "contained"}
              onClick={button.onClick}
              // color={button.color || "primary"}
            >
              {button.text}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default HeroContent;
