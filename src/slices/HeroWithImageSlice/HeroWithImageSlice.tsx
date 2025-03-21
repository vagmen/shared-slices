import * as React from "react";
import { Box, Container } from "@mui/material";
import HeroContent from "../../components/HeroContent/HeroContent";
import { HeroWithImageSliceProps } from "./types";
import { useUrmanComponents } from "../../components/UrmanProvider/UrmanProvider";

const HeroWithImageSlice: React.FC<HeroWithImageSliceProps> = ({
  sx,
  containerProps,
  maxWidth = "lg",
  image,
  imagePosition = "right",
  mobileImagePosition = "top",
  // ImageComponent = "img",
  imageComponentProps = {},
  objectFit = "cover",
  priceOptions,
  pricePosition,
  priceSize = "medium",
  animatePrice = false,
  animatePriceEffect = "count",
  animatePriceDuration = 1500,
  ...contentProps
}) => {
  const { ImageComponent } = useUrmanComponents();

  const ImageBox = () => (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        order: {
          xs: mobileImagePosition === "top" ? 0 : 2,
          md: imagePosition === "left" ? 0 : 2,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          aspectRatio: image.dimensions
            ? `${image.dimensions.width} / ${image.dimensions.height}`
            : "16 / 9",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <ImageComponent
          src={image.src}
          alt={image.alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: objectFit,
          }}
          {...imageComponentProps}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      {...containerProps}
      sx={{
        width: "100%",
        py: 8,
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          <ImageBox />
          <Box sx={{ flex: 1, width: "100%", order: 1 }}>
            <HeroContent
              {...contentProps}
              centered={false}
              priceOptions={
                priceOptions
                  ? {
                      ...priceOptions,
                      size: priceSize,
                      animate: animatePrice,
                      animationEffect: animatePriceEffect,
                      animationDuration: animatePriceDuration,
                    }
                  : undefined
              }
              pricePosition={pricePosition}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroWithImageSlice;
