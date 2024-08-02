import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Portfolio, Slide } from '../../index';
import portfolioImg1 from '../../../src/assets/Miportfolio-img/Portfolio-1.png';
import portfolioImg2 from '../../../src/assets/Miportfolio-img/Portfolio-2.png';
import portfolioImg3 from '../../../src/assets/Miportfolio-img/Portfolio-3.png';
import portfolioImg4 from '../../../src/assets/Miportfolio-img/Portfolio-4.png';
import portfolioImg5 from '../../../src/assets/Miportfolio-img/Portfolio-5.png';
import portfolioImg13 from '../../../src/assets/Miportfolio-img/Portfolio-13.png';
import portfolioImg7 from '../../../src/assets/Miportfolio-img/Portfolio-7.png';
import portfolioImg8 from '../../../src/assets/Miportfolio-img/Portfolio-8.png';
import portfolioImg9 from '../../../src/assets/Miportfolio-img/Portfolio-9.png';
import portfolioImg10 from '../../../src/assets/Miportfolio-img/Portfolio-10.png';
import portfolioImg11 from '../../../src/assets/Miportfolio-img/Portfolio-11.png';
import portfolioImg12 from '../../../src/assets/Miportfolio-img/Portfolio-12.png';

const Miportfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const tituloPortfolio = {
    color: '#FFFFFF',
    fontSize: "30",
    fontWeight: 700,
    position: 'relative',
    alignSelf: 'start',
    "&::before": {
      content: '""',
      position: "absolute",
      top: '3rem',
      left: "0",
      width: "25px",
      height: "4px",
      backgroundColor: "#F26C4F",
    },
  };

  const manejarSlideCambios = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const slides = [
    {
      image: portfolioImg4,
      link: 'https://foodied-restaurante.vercel.app/',
      title: 'E-commerce',
      descripcion:'(React-Express-Node.js-Mongo DB)'
    },
    {
      image: portfolioImg5,
      link: 'https://pronostico-ya.vercel.app/',
      title: 'Aplicación del clima',
      descripcion:'(React-Express-Node.js-Mongo DB)'
    },
    {
      image: portfolioImg13,
      link: 'https://nacfer-estate-app.vercel.app/',
      title: 'Aplicación Bienes Raices',
      descripcion:'(React-Express-Node.js-Mongo DB)'
    },/* ,
    {
      image: portfolioImg2,
      link: 'https://nachof948.github.io/Tic-tac-toe/',
      title: 'Tic tac toe',
      descripcion:'(HTML-CSS-Javascript-React)'
    },
    {
      image: portfolioImg3,
      link: 'https://nachof948.github.io/buscador-de-peliculas/',
      title: 'Buscador de Peliculas',
      descripcion:'(HTML-CSS-Javascript-React)'
    } */
    /* {
      image: portfolioImg1,
      link: 'https://nachof948.github.io/calculadora/',
      title: 'Calculadora',
      descripcion:'(HTML-CSS-Javascript-React)'
    }, *//* ,
    {
      image: portfolioImg6,
      link: 'https://nachof948.github.io/Proyecto-N2/',
      title: 'Diseño UX/UI',
    },
    {
      image: portfolioImg7,
      link: 'https://nachof948.github.io/proyecto-html-css/',
      title: 'Diseño de Marca',
    },
    {
      image: portfolioImg8,
      link: 'https://nachof948.github.io/proyecto-bootstrap-1/',
      title: 'Desarrollo Web',
    },
    {
      image: portfolioImg9,
      link: 'https://nachof948.github.io/ProyectoN4/',
      title: 'Aplicaciones Web',
    },
    {
      image: portfolioImg10,
      link: 'https://nachof948.github.io/Proyecto-N3/',
      title: 'Diseño UX/UI',
    },
    {
      image: portfolioImg11,
      link: 'https://nachof948.github.io/social-proof-section-master/',
      title: 'Diseño de Marca',
    },
    {
      image: portfolioImg12,
      link: 'https://nachof948.github.io/testimonials-grid-section-main/',
      title: 'Desarrollo Web',
    } */
  ];

  const renderPortfolio = () => {
    const startIndex = currentSlide * 4;
    const endIndex = Math.min(startIndex + 4, slides.length);

    return slides.slice(startIndex, endIndex).map((slide, index) => (
      <Portfolio
        key={startIndex + index}
        imagen={slide.image}
        link={slide.link}
        titulo={slide.title}
        descripcion={slide.descripcion}
        prefetch
      />
    ));
  };

  return (
    <Box as={'section'} width={'100vw'} py={70} id='portfolio' >
      <Flex width={{ lg: '80vw', sm: '90vw' }} margin={'0 auto'} flexDirection={'column'} gap='60px' py={'35px'}>
        <Text as={'h2'} sx={tituloPortfolio}>Mi Portfolio</Text>
        <Flex justifyContent={'center'} alignItems={'center'} gap={'1rem'} flexWrap={'wrap'} >
          {renderPortfolio()}
        </Flex>
        <Flex justifyContent={'center'} gap={15} >
{/*           <Slide currentSlide={currentSlide} totalSlides={Math.ceil(slides.length / 4)} slideCambios={manejarSlideCambios} />
 */}        </Flex>
      </Flex>
    </Box>
  );
}

export { Miportfolio };
