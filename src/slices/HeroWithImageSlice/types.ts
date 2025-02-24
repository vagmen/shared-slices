import { HeroContentProps } from "../../components/HeroContent/types";
import { Box, SxProps, Theme } from "@mui/material";

export interface HeroWithImageSliceProps extends Omit<HeroContentProps, "sx"> {
  sx?: SxProps<Theme>;
  containerProps?: React.ComponentProps<typeof Box>;
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
  ImageComponent?: React.ElementType;
  imageComponentProps?: Record<string, any>;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}
