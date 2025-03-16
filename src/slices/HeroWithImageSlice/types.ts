import { HeroContentProps } from "../../components/HeroContent/types";
import { Box, SxProps, Theme } from "@mui/material";
import { PriceDisplayProps } from "../../components/PriceDisplay/PriceDisplay";

export interface PriceOptions {
  price: number;
  currency?: string;
  prefix?: string;
  suffix?: string;
}

export interface HeroWithImageSliceProps
  extends Omit<HeroContentProps, "centered"> {
  sx?: any;
  containerProps?: any;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  image: {
    src: string;
    alt: string;
    dimensions?: {
      width: number;
      height: number;
    };
    blurDataURL?: string;
  };
  imagePosition?: "left" | "right";
  mobileImagePosition?: "top" | "bottom";
  // ImageComponent?: React.ElementType;
  imageComponentProps?: any;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priceOptions?: PriceDisplayProps;
  pricePosition?: "above-buttons" | "below-buttons";
}
