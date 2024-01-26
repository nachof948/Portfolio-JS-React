import React from 'react';
import { Box,Link, useMediaQuery } from '@chakra-ui/react';


const Menuresponsive = ({ menuDesplegado, onClick }) => {
const [mostrarMenuResponsive] = useMediaQuery('(max-width: 1023px)')

const menuResponsiveEstilo = {
    color: '#F26C4F',
    fontSize: '3.5rem',
    display: mostrarMenuResponsive ? 'block' : 'none',
    cursor: 'pointer',
    _hover: {
    filter: 'drop-shadow(0px 0px 10px #F26C4F)',
    },
};

const enlacesMenu = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap:'2rem'
};
    const enlacesResponsive={
        position:'relative',
        "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "0",
            width: "0%",
            height: "3px",
            backgroundColor: "#F26C4F",
            transition:"width 250ms"
        },
        _hover: {
            "&::before": {
                width:"50%",
            },
        },
    }
    const menuResponsive={
        bg:"#222222",
        color:"white",
        marginTop: '4rem',
        p:"1rem"
    }
    const cvBtn={
        color:'#FFFFFF',
        bg:'#F26C4F',
        border:'1px solid #F26C4F',
        borderRadius: '5px',
        p: '0.6rem 1.6rem',
        fontWeight:'400',
        letterSpacing:'1px',
        whiteSpace:"nowrap",
        _hover: {
            bg:'transparent',
            color:'#F26C4F'
        },
    }
    const manejarLinkClick = () => {
        onClick();
      };
return (
    <>
    {menuDesplegado && (
        <Box sx={menuResponsive}display={mostrarMenuResponsive ? 'block' : 'none'}>
            <Box sx={enlacesMenu}>
                <Link sx={enlacesResponsive} onClick={manejarLinkClick} href="#" display="block" mb="1rem" fontSize={'1.3rem'}>
                    Inicio
                </Link>
                <Link sx={enlacesResponsive} onClick={manejarLinkClick} href="#sobre-mi" display="block" mb="1rem" fontSize={'1.3rem'}>
                    Acerca
                </Link>
                <Link sx={enlacesResponsive} onClick={manejarLinkClick} href="#mis-servicios" display="block" mb="1rem" fontSize={'1.3rem'}>
                    Servicios
                </Link>
                <Link sx={enlacesResponsive} onClick={manejarLinkClick} href="#portfolio" display="block" mb="1rem" fontSize={'1.3rem'}>
                    Portfolio
                </Link>
                <Link sx={cvBtn} onClick={manejarLinkClick}
                href="https://drive.google.com/uc?export=download&id=1iiLd_s3x0mEP2FfrhzxO4NFLKlfHysII"
                download="CV-Ignacio Fernandez.pdf">
                    Descargar CV
                </Link>
            </Box>
        </Box>
    )}
        <Box sx={menuResponsiveEstilo} onClick={onClick}>
            <i className="bi bi-list"></i>
        </Box>
    </>
)
}

export { Menuresponsive }
