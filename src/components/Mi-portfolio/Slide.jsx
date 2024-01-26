import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Slide = ({ currentSlide, totalSlides, slideCambios }) => {
  const slideEstilo = {
    bg: 'transparent',
    border: '2px solid #F26C4F',
    borderRadius: '50%',
    width: '1.5rem',
    height: '1.5rem',
    cursor: 'pointer',
    _hover: {
      bg: '#F26C4F',
    },
    _focus: {
      bg: '#F26C4F',
    },
  };

  const manejarSlideClick = (slideIndex) => {
    slideCambios(slideIndex);
  };

  const renderSlides = () => {
    const slides = [];

    for (let i = 0; i < totalSlides; i++) {
      slides.push(
        <Box
          key={i}
          as='span'
          sx={{
            ...slideEstilo,
            bg: currentSlide === i ? '#F26C4F' : 'transparent',
          }}
          opacity={currentSlide === i ? 1 : 0.5}
          onClick={() => manejarSlideClick(i)}
          onFocus={() => manejarSlideClick(i)}
        ></Box>
      );
    }

    return slides;
  };

  return (
    <Flex color='white' justifyContent='center' gap='1.5rem'>
      {renderSlides()}
    </Flex>
  );
};

export {Slide};
