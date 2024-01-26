import React from 'react';
import Imagensobremi from '../../assets/Sobremi-img/Imagen Sobre-Mi.png'
import { Image } from '@chakra-ui/react';

const Imgsobremi = () => {
    const sobreMiImagen={
        borderRadius:'50%',
        bg:'#F26C4F'
    }
    return(
        <>
            <Image sx={sobreMiImagen} 
            src={Imagensobremi} 
            width={{xl: '25rem', lg:'22rem', sm3:'25rem', sm1:'19rem', sm:'15rem'}} 
            alt="Ignacio Fernandez" />
        </>
    )
}

export { Imgsobremi }