import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { getTonalColors } from "../../theme/utils";
import { Theme } from "@mui/material/styles";

export interface PriceDisplayProps {
  price: number;
  currency?: string;
  prefix?: string;
  suffix?: string;
  size?: "small" | "medium" | "large";
  sx?: any;
  animate?: boolean;
  animationDuration?: number;
  animationEffect?: "count" | "fade" | "slide" | "bounce";
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  currency = "₽",
  prefix,
  suffix,
  size = "medium",
  sx,
  animate = false,
  animationDuration = 1500,
  animationEffect = "count",
}) => {
  const [displayPrice, setDisplayPrice] = useState(animate ? 0 : price);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Размеры шрифта в зависимости от выбранного размера
  const fontSizes = {
    small: {
      price: { xs: "1.25rem", md: "1.5rem" },
      prefix: { xs: "0.9rem", md: "1rem" },
    },
    medium: {
      price: { xs: "1.5rem", md: "1.85rem" },
      prefix: { xs: "1rem", md: "1.15rem" },
    },
    large: {
      price: { xs: "1.75rem", md: "2.25rem" },
      prefix: { xs: "1.1rem", md: "1.25rem" },
    },
  };

  // Отступы в зависимости от размера
  const padding = {
    small: { py: 1.5, px: 2 },
    medium: { py: 1.75, px: 2.5 },
    large: { py: 2, px: 3 },
  };

  // Эффекты анимации
  const getAnimationStyles = () => {
    const baseStyles = {
      transition: "transform 0.3s ease",
      "&:hover": animate
        ? {
          transform: "scale(1.05)",
        }
        : {},
    };

    if (!animate || !isAnimating) return baseStyles;

    switch (animationEffect) {
      case "fade":
        return {
          ...baseStyles,
          animation: isAnimating
            ? `fadeIn ${animationDuration / 1000}s ease-out`
            : "none",
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        };
      case "slide":
        return {
          ...baseStyles,
          animation: isAnimating
            ? `slideIn ${animationDuration / 1000}s ease-out`
            : "none",
          "@keyframes slideIn": {
            "0%": { transform: "translateY(20px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
        };
      case "bounce":
        return {
          ...baseStyles,
          animation: isAnimating
            ? `bounce ${animationDuration / 1000}s ease-out`
            : "none",
          "@keyframes bounce": {
            "0%": { transform: "scale(0.5)", opacity: 0 },
            "60%": { transform: "scale(1.1)" },
            "80%": { transform: "scale(0.95)" },
            "100%": { transform: "scale(1)", opacity: 1 },
          },
        };
      default:
        return baseStyles;
    }
  };

  // Стили для числа
  const getNumberStyles = () => {
    const baseStyles = {
      fontWeight: "bold",
      color: (theme: Theme) => getTonalColors(theme).text,
      fontSize: fontSizes[size].price,
      letterSpacing: "-0.02em",
    };

    if (!animate || animationEffect !== "count" || !isAnimating)
      return baseStyles;

    return {
      ...baseStyles,
      transition: "all 0.2s ease",
      animation: isAnimating
        ? `pulse ${animationDuration / 15000}s ease infinite`
        : "none",
      "@keyframes pulse": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.02)" },
        "100%": { transform: "scale(1)" },
      },
    };
  };

  // Настройка IntersectionObserver для отслеживания когда элемент становится видимым
  useEffect(() => {
    if (!animate || hasAnimated) {
      // Если анимация отключена или уже проигрывалась
      return;
    }

    const options = {
      root: null, // использовать viewport как контейнер
      rootMargin: "0px",
      threshold: 0.1, // запускать, когда 10% элемента видимо
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Элемент стал видимым, запускаем анимацию
          startAnimation();
          setHasAnimated(true);
          observer.disconnect(); // Отключаем наблюдение после первого срабатывания
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animate, hasAnimated]);

  // Функция для запуска анимации
  const startAnimation = () => {
    setIsAnimating(true);
    if (animationEffect === "count") {
      const startTime = Date.now();
      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        setDisplayPrice(Math.floor(progress * price));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      requestAnimationFrame(animate);
    } else {
      // Для других эффектов просто показываем цену сразу
      setDisplayPrice(price);
      setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        alignItems: "baseline",
        gap: 1,
        // backgroundColor: (theme: Theme) => getTonalColors(theme).main,
        ...padding[size],
        // borderRadius: '2px',
        width: "fit-content",
        ...sx,
        ...getAnimationStyles(),
      }}
    >
      {prefix && (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: "normal",
            fontSize: fontSizes[size].prefix,
          }}
        >
          {prefix}
        </Typography>
      )}
      <Typography variant="h4" component="span" sx={getNumberStyles()}>
        {displayPrice.toLocaleString("ru-RU")}{" "}
        <Box
          component="span"
          sx={{
            fontSize: "0.8em",
            fontWeight: "normal",
            color: (theme: Theme) => getTonalColors(theme).text,
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
            fontSize: fontSizes[size].prefix,
          }}
        >
          {suffix}
        </Typography>
      )}
    </Box>
  );
};

export default PriceDisplay;
