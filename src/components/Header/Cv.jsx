import React from 'react';
import { Link, useMediaQuery } from "@chakra-ui/react";

const Cv = ({ section }) => {
  const [reducirBtnCv] = useMediaQuery("(max-width: 1120px)");
  const [desaparecerBtnCv] = useMediaQuery("(max-width: 1023px)");

  const cvBtn = {
    color: '#FFFFFF',
    bg: '#F26C4F',
    marginRight:'0.75rem',
    border: '1px solid #F26C4F',
    borderRadius: '5px',
    fontWeight: '400',
    p: reducirBtnCv ? '0.8rem 1.8rem' : '1rem 2.2rem',
    display: section === 'header' && desaparecerBtnCv ? 'none' : 'flex',
    letterSpacing: '1px',
    _hover: {
      bg: 'transparent',
      color: '#F26C4F',
    },
  };

  return (
    <>
      <Link
        sx={cvBtn}
        href="https://drive.google.com/uc?export=download&id=18FEpV2tJUiY2JfajC86vIyI0tgM2wlQd"
        download="CV-Ignacio Fernandez.pdf"
      >
        Descargar CV 
      </Link>
    </>
  );
};

export { Cv };
