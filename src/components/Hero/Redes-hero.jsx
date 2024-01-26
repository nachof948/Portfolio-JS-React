import { Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';

const Redeshero = () => {
    const contactosHero ={
        backgroundColor:'#FFFFFF',
        fontSize:24,
        color:"black",
        borderRadius:'50%',
        p:'4px 10px',
        transition:'all 250ms',
        _hover:{
            boxShadow:'0px 0px 20px #F26C4F'
        },
    }
    return(
        <Flex direction={{lg:'column', sm:'row'}} gap={{sm1:'2rem',sm:'1.5rem'}}>
            <Box sx={contactosHero}>
                <Link href="https://www.instagram.com/nachofernandezdev/" target='_blank'><i className="bi bi-instagram"></i></Link>
            </Box>
            <Box sx={contactosHero}>
                <Link href="https://www.linkedin.com/in/ignacio-fernandez-45666b1a7/" target='_blank'><i className="bi bi-linkedin"></i></Link>
            </Box>
            <Box sx={contactosHero}>
                <Link href="https://www.facebook.com/nacho.fernandez.737/" target='_blank'><i className="bi bi-facebook"></i></Link>
            </Box>
            <Box sx={contactosHero}>
                <Link href="https://github.com/nachof948" target='_blank'><i className="bi bi-github"></i></Link>
            </Box>
        </Flex>
    )
}

export { Redeshero }