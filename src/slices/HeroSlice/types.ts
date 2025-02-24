import { HeroContentProps } from "../../components/HeroContent/types";
import { Box, SxProps, Theme } from "@mui/material";

export interface HeroSliceProps extends Omit<HeroContentProps, "sx"> {
  sx?: SxProps<Theme>;
  containerProps?: React.ComponentProps<typeof Box>;
}
