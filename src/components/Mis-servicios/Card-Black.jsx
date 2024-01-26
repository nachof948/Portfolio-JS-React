import React from 'react';
import { Flex, Text,Image } from '@chakra-ui/react';

const CardBlack = ({imagen, imagenHover,servicio, explicacion}) => {
    const card ={
        color:'white',
        bg:'#262626',
        borderRadius:15,
        flexDirection:'column',
        cursor:'pointer',
        transition:'all 250ms',
        "& #cardImagenHover": {
            display: 'none',
        },
        _hover: {
            bg: '#F26C4F',
            "& #cardTextoBlanco": {
                color: 'white',
            },
            "& #cardImagen": {
                display: 'none',
            },
            "& #cardImagenHover": {
                display: 'block',
            },
        },
    }
    const cardTexto={
        color:"#818181",
        lineHeight:'22px'
    }
    const cardTitulo ={
        fontWeight:'600',
        letterSpacing:'2px'
    }
    return(
        <Flex sx={card} 
        gap={'10px'} 
        height= {{ lg:'26.3rem',md1:'22.5rem', sm2:'20rem', sm:'22.5rem'}} 
        p={{xl:'1rem 2.5rem 5rem', lg:'1rem 1.3rem 5rem', md:'1rem 1.3rem 2.5rem'}}
        flexBasis={{lg:'33%', md1:'43%',sm3: '80%', sm:'90%'}}
        textAlign={{lg:'start', sm:'center'}}>
            <Image id='cardImagen' src={imagen} alt="UX-UI" width={{md:'8rem', sm:'7rem'}} alignSelf={'center'} mb={'15px'}/>
            <Image id='cardImagenHover' src={imagenHover} alt="UX-UI" width={{md:'8rem', sm:'7rem'}} alignSelf={'center'} mb={'15px'}/>
            <Text as={'h3'} sx={cardTitulo} fontSize={{xxl:'1.8rem', lg1:'1.5rem', lg:'1.2rem', sm2:'1.8rem', sm:'1.5rem'}}>{servicio}</Text>
            <Text id='cardTextoBlanco' sx={cardTexto}  fontSize={{lg1:'1.1rem', md:'1rem',sm3:'1.1rem'}}>{explicacion}</Text>
        </Flex>
    )
}

export { CardBlack }