import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Textosobremi = () => {
    const sobreMiTexto ={
        width:'100%',
        color:'#818181',
        display:'flex',
        flexDirection:'column',
        fontWeight: 600,
        lineHeight: '1.2'
    }
    const sobreMiH2 ={
        color:'#FFFFFF',
        fontWeight: 700,
        position:'relative',
        "&::before": {
            content: '""',
            position: "absolute",
            top: '2.5rem',
            left: "0",
            width: "21px",
            height: "4px",
            backgroundColor: "#F26C4F",
        },
    }
    const sobreMiNaranja ={
        color:'#F26C46'
    }
    return(
        <Box sx={sobreMiTexto} gap={{xl:'1.3rem', lg:'0.8rem', sm3:'1.3rem', sm:'1.1rem'}} >
            <Text as='h2' sx={sobreMiH2} fontSize={ {xxl:"1.9rem", sm:'1.7rem'}}>Sobre Mi</Text>
            <Text sx={sobreMiNaranja} fontSize={{xl1:'1.3rem',lg:'1.1rem', md:'1rem', sm1:'0.8rem', sm:'0.7rem'}}>Soy un Desarrollador Full Stack viviendo en Buenos Aires</Text>
            <Text fontSize={{xl1:'1.1rem',xl:"1rem", lg:'0.85rem',md:'1rem', sm:'0.8rem'}}>Finalice una Diplomatura en Programación Web Full Stack en la Universidad Tecnológica  Nacional y estoy muy entusiasmado por sumergirme en este apasionante campo. Mi interés por la programación web comenzó cuando descubrí la capacidad de crear aplicaciones y sitios web interactivos.</Text>
            <Text fontSize={{xl1:"1.1rem", xl:'1rem',lg:'0.85rem',md:'1rem',sm:'0.8rem'}}>Durante mi formación, he adquirido experiencia en diversos lenguajes como HTML, CSS y JavaScript, así como en el uso de frameworks como React. También a lo largo de la formacion e incorporado conocimientos sobre Node Js y sobre bases de datos como MongoDB para gestionar y almacenar datos. Lo que me permite tener un conocimiento Full Stack acerca del desarrollo de sitios webs interactivos y aplicaciones webs.</Text>
        </Box>
    )
}

export { Textosobremi }