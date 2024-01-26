import React from 'react';
import { Box, Link, useMediaQuery } from '@chakra-ui/react';

const Navbar = () => {
  const [separacionEnlaces] = useMediaQuery("(max-width: 1280px)");
  const [ocultarNav] = useMediaQuery("(max-width: 1023px)");


  const navEstilo = {
    display: 'flex',
    gap: separacionEnlaces ? '3.5rem' : '6.5rem',
  };


const enlacesNav = {
  position: "relative",
  textDecoration: "none",
  display: ocultarNav ? 'none' : 'flex',
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "0",
    width: "0%",
    height: "3px",
    backgroundColor: "#F26C4F",
    transition: "width 250ms"
  },
  _hover: {
    "&::before": {
      width: "50%",
    },
  },
};
  return (
    <Box as="nav" sx={navEstilo}>
      <Link sx={enlacesNav} href="#">Inicio</Link>
      <Link sx={ enlacesNav} href="#sobre-mi">Acerca</Link>
      <Link sx={ enlacesNav} href="#mis-servicios"> Servicios</Link>
      <Link sx={ enlacesNav} href="#portfolio">Portfolio</Link>
    </Box>
  );
};

export { Navbar };
