import { SxProps, Theme } from "@mui/material";
import { PriceDisplayProps } from "../PriceDisplay/PriceDisplay";

export interface HeroContentProps {
  sx?: SxProps<Theme>;
  title: React.ReactNode;
  description: string;
  titleVariant?: "h1" | "h2" | "h3";
  buttons?: Array<{
    text: string;
    variant?: "text" | "contained" | "outlined" | "tonal" | "link";
    onClick?: () => void;
    href?: string;
    target?: string;
    // color?: "primary" | "secondary" | "inherit";
  }>;
  tags?: Array<{
    emoji?: string;
    text: string;
  }>;
  centered?: boolean;
  priceOptions?: PriceDisplayProps;
  pricePosition?: "above-buttons" | "below-buttons";
}
