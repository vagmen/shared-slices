import * as React from "react";
import { Box, Typography } from "@mui/material";

export interface PriceDisplayProps {
  price: number;
  currency?: string;
  prefix?: string;
  suffix?: string;
  sx?: any;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  currency = "₽",
  prefix,
  suffix,
  sx,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        gap: 1,
        backgroundColor: "rgba(92, 107, 52, 0.05)",
        py: 2,
        px: 3,
        borderRadius: 2,
        width: "fit-content",
        ...sx,
      }}
    >
      {prefix && (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: "normal",
            fontSize: { xs: "1.1rem", md: "1.25rem" },
          }}
        >
          {prefix}
        </Typography>
      )}
      <Typography
        variant="h4"
        component="span"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: { xs: "1.75rem", md: "2.25rem" },
          letterSpacing: "-0.02em",
        }}
      >
        {price.toLocaleString("ru-RU")}{" "}
        <Box
          component="span"
          sx={{
            fontSize: "0.8em",
            fontWeight: "normal",
            color: "primary.main",
            opacity: 0.9,
          }}
        >
          {currency}
        </Box>
      </Typography>
      {suffix && (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: "normal",
            fontSize: { xs: "1.1rem", md: "1.25rem" },
          }}
        >
          {suffix}
        </Typography>
      )}
    </Box>
  );
};

export default PriceDisplay;
