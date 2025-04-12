import * as React from "react";
import { Box, Typography } from "@mui/material";
import Tag from "../Tag/Tag";
import { HeroContentProps } from "./types";
import Button from "../Button/Button";
import PriceDisplay from "../PriceDisplay/PriceDisplay";

const HeroContent: React.FC<HeroContentProps> = ({
  sx,
  title,
  description,
  buttons,
  tags,
  titleVariant = "h2",
  centered = false,
  priceOptions,
  pricePosition = "above-buttons",
  priceSize = "medium",
  animatePrice = false,
  animatePriceEffect = "count",
  animatePriceDuration = 1500,
}) => {
  const renderPrice = () => {
    if (!priceOptions) return null;
    return (
      <PriceDisplay
        {...priceOptions}
        size={priceSize}
        animate={animatePrice}
        animationEffect={animatePriceEffect}
        animationDuration={animatePriceDuration}
        sx={{
          mb: pricePosition === "above-buttons" ? 3 : 0,
          mt: pricePosition === "below-buttons" ? 3 : 0,
          mx: { xs: "auto", md: centered ? "auto" : 0 },
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: centered ? "center" : "flex-start",
        textAlign: centered ? "center" : "left",
        ...sx,
        gap: 2,
      }}
    >
      {tags && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            // mb: 4,
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
        sx={{
          // mb: 3,
          textWrap: "balance",
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body1"
          sx={{
            mb: pricePosition === "above-buttons" && buttons ? 0 : 3,
            color: "text.secondary",
            textWrap: "balance",
          }}
        >
          {description}
        </Typography>
      )}

      {pricePosition === "above-buttons" && renderPrice()}

      {buttons && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            // mt: 3,
            flexWrap: "wrap",
            justifyContent: centered ? "center" : "flex-start",
          }}
        >
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.text}
            </Button>
          ))}
        </Box>
      )}

      {pricePosition === "below-buttons" && renderPrice()}
    </Box>
  );
};

export default HeroContent;
