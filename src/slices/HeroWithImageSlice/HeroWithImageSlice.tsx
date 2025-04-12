import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import HeroContent from '../../components/HeroContent/HeroContent';
import { HeroWithImageSliceProps } from './types';

const ImageBox: React.FC<{
  image: HeroWithImageSliceProps['image'];
  objectFit: HeroWithImageSliceProps['objectFit'];
}> = ({ image, objectFit }) => {
  const theme = useTheme();

  if (objectFit === 'contain') {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'grey.100',
          borderRadius: theme.shape.borderRadius * 2,
          padding: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
        }}
      >
        <Box
          component="img"
          src={image.src || ''}
          alt={image.alt}
          sx={{
            maxWidth: '100%',
            maxHeight: { xs: '250px', sm: '300px', md: '400px' },
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          loading="lazy"
          decoding="async"
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: { xs: '200px', sm: '250px', md: '300px' },
        maxHeight: { xs: '300px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey.100',
        borderRadius: theme.shape.borderRadius * 2,
      }}
    >
      <img
        src={image.src || ''}
        alt={image.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        loading="lazy"
        decoding="async"
      />
    </Box>
  );
};

export default function HeroWithImageSlice({
  title,
  description,
  image,
  maxWidth = 'lg',
  imagePosition = 'right',
  objectFit = 'cover',
  titleVariant = 'h2',
  buttons,
  tags,
  priceOptions,
  priceSize = 'medium',
  animatePrice = false,
  animatePriceEffect = 'count',
  animatePriceDuration = 1000,
  mobileImagePosition = 'top',
  ...rest
}: HeroWithImageSliceProps) {
  return (
    <Container maxWidth={maxWidth}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          py: 6,
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: 1, order: { xs: 2, md: imagePosition === 'left' ? 2 : 1 } }}>
          <HeroContent
            title={title}
            description={description}
            titleVariant={titleVariant}
            buttons={buttons}
            tags={tags}
            priceOptions={priceOptions}
            priceSize={priceSize}
            animatePrice={animatePrice}
            animatePriceEffect={animatePriceEffect}
            animatePriceDuration={animatePriceDuration}
            {...rest}
          />
        </Box>
        <Box sx={{
          flex: 1,
          order: {
            xs: mobileImagePosition === 'top' ? 1 : 2,
            md: imagePosition === 'left' ? 1 : 2
          }
        }}>
          <ImageBox image={image} objectFit={objectFit} />
        </Box>
      </Box>
    </Container>
  );
}
