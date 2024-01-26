import React from 'react';
import imagenLogo from '../../assets/Header-img/Logo.png'
import { Image,Link } from '@chakra-ui/react';

const Logo = () => {
    
    return(
        <>
            <Link href='#'><Image src={imagenLogo} alt="Logo" /></Link>
        </>
    )
}

export { Logo }