import React from 'react';
import HeroImagen from '../../assets/Hero-img/Img-Hero.png'
import { Image } from '@chakra-ui/react';
const Imghero = () => {

    return(
        <>
            <Image src={HeroImagen} 
            width= {{xxl: '30.5rem', xl: '24.8rem',lg:'18rem',md:'20rem',sm:'18rem'}} 
            height= {{xxl: '40rem', xl: '34rem',lg:'26rem', md:'27rem', sm:'24rem'}} 
            alt="Ignacio Fernandez" />
        </>
    )
}

export { Imghero }