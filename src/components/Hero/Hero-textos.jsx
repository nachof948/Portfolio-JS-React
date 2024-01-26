import React from 'react';
import { Text, Flex, useMediaQuery, Link } from '@chakra-ui/react';

const Titulos = () => {
    const [menorA1023] = useMediaQuery("(max-width: 1023px)");
const textContenedor ={
    color:"white",
    flexDirection:'column',
    gap:'1.5rem',
    alignItems:menorA1023 ? 'center' : 'start'
}
const tituloHeader={
    fontWeight:"700",
}
const btnHero ={
    bg:'transparent', 
    color:'#F26C4F',
    border:'2px solid #F26C4F',
    borderRadius:'5px',
    p:'0.5rem 2.1rem',
    fontWeight:'600',
    letterSpacing:'2px',
    fontSize:'14px',
    transition:'all 250ms',
    _hover:{
        bg:'#F26C4F',
        color:'white'
    }
}
    return(
        <Flex sx={textContenedor} textAlign={{xxl:'start', xl:'start',lg:'start', sm:'center'}}>
            <Text as="h1" sx={tituloHeader} 
            fontSize={{xxl:'4.45rem', xl:'3.5rem',lg:'2.7rem', md:'3.2rem', sm3: '2.8rem',sm2:'2.15rem', sm:'1.7rem'}} 
            width={{lg:'100%',md:'80%'}}
            lineHeight={{xl:'80px', lg:'60px',md:'65px',sm:'50px'}}>
                Hola, {menorA1023 ? ' ' :  <br />} Soy{' '}
            <Text as="span" color= '#F26C4F'>
                Ignacio
            </Text>
            , {menorA1023 ? ' ' :  <br />} un{' '}
            <Text as="span" color= '#F26C4F'>
                programador web
            </Text>
            .
            </Text>
            <Text letterSpacing={{md:'5px', sm:'2px' }}
                fontSize={{xxl:'1.1rem', xl:'0.9rem',lg:'0.7rem',md:'0.8rem',sm2:'0.7rem', sm:'0.5rem'}}>
                Desarrollador Full Stack</Text>
            <Link href="#contacto" sx={btnHero}>Contactame!</Link>
        </Flex>
    )
}

export { Titulos }