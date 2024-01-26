import React from 'react';
import BrandingCard from '../../assets/Misservicios-img/card-branding.svg'
import BrandingCardBlanco from '../../assets/Misservicios-img/card-branding-blanco.svg'
import { Flex, Text,Image } from '@chakra-ui/react';
const Cardbranding = () => {

    const cardBranding ={
        color:'white',
        bg:'#F26C4F',
        borderRadius:15,
        flexDirection:'column',
        border:'1px solid #F26C4F',
        cursor:'pointer',
        transition:'all 150ms',
        "& #cardImagenHover": {
            display: 'none',
        },
        _hover: {
            bg: '#262626',
            "& #cardTexto": {
            color: '#818181',
            },
            "& #cardImagen": {
                display: 'none',
            },
            "& #cardImagenHover": {
                display: 'block',
            },
        },
    }   
    const cardTextoBranding={
        color:"#FFFFFF",
        lineHeight:'22px'
    }
    const cardBrandingImg ={
        alignSelf:'center', 
        my:'10px',
        transform: 'rotate(270deg)'
    }
    const cardTituloBranding ={
        fontWeight:'600',
        letterSpacing:'2px'
    }
    return(
        <Flex sx={cardBranding} 
        gap={'0.9rem'} 
        height= {{ lg:'26.3rem',md1:'22.5rem', sm2:'21rem', sm:'20.5rem'}} 
        p={{xl:'1rem 2.5rem 5rem', lg:'1rem 1.3rem 5rem', md:'1rem 1.3rem 2.5rem'}}
        flexBasis={{lg:'33%', md1:'43%', sm3: '80%', sm:'90%'}}
        textAlign={{lg:'start', sm:'center'}}>
            <Image sx={cardBrandingImg} id='cardImagen'width={{md:'7.2rem', sm:'6rem'}} src={BrandingCardBlanco} alt="UX-UI" />
            <Image sx={cardBrandingImg}  id='cardImagenHover' width={{md:'7.2rem', sm:'6rem'}} src={BrandingCard} alt="UX-UI" />
            <Text as={'h3'} sx={cardTituloBranding} fontSize={{xxl:'1.8rem', lg1:'1.5rem', lg:'1.2rem', sm2:'1.8rem', sm:'1.5rem'}}>Diseño de Marca</Text>
            <Text id='cardTexto' sx={cardTextoBranding}  fontSize={{lg1:'1.1rem', md:'1rem',sm1:'1.1rem', sm:'0.8rem'}}>Se busca comunicar los valores, la personalidad y la propuesta única de una marca a través de elementos visuales como el logotipo, los colores, las tipografías, los patrones y otros elementos gráficos.</Text>
        </Flex>
    )
}

export { Cardbranding }