import React, { useState, useEffect } from 'react';
import { Logo, Cv, Navbar, Menuresponsive } from '../../index';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';

const Header = () => {
  const [agrandarAncho] = useMediaQuery({ query: '(max-width: 1023px)' });
  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const [paddingTop, setPaddingTop] = useState('4rem');
  
  const manejarMenuClick = () => {
    setMenuDesplegado(!menuDesplegado);
  };
  
  const manejarScroll = () => {
    const scrollY = window.scrollY;
    const newPaddingTop = scrollY > 0 ? '1rem' : '4rem';
    setPaddingTop(newPaddingTop);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', manejarScroll);
  
    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  const header = {
    bg: '#222222',
    width: '100vw',
    position: 'fixed',
    display:'flex',
    justifyContent:'center',
    margin:'0 auto',
    top: 0,
    pt: paddingTop,
    zIndex: 12,
  };
  const headerContenido = {
    bg: '#222222',
    color: 'white',
    alignItems: 'start',
    justifyContent: 'space-between',
  };
  const headerNav = {
    alignItems: 'center',
  };

  return (
    <Box as="header" sx={header}>
      <Flex sx={headerContenido} width={{ lg: '81vw', sm: '93.5vw' }}>
        <Flex sx={headerNav} gap={{ xl: '5.9rem', lg: '3.5rem' }} >
          <Logo />
          {agrandarAncho && !menuDesplegado ? null :<Navbar />}
        </Flex>
        <Cv section='header'/>
        <Menuresponsive menuDesplegado={menuDesplegado} onClick={manejarMenuClick} />
      </Flex>
    </Box>
  );
};

export { Header };
