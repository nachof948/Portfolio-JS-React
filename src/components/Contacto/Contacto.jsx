import { Box, Flex} from '@chakra-ui/react';
import {TextoContacto, Formulario} from '../../index'
import React from 'react';
const Contacto = () => {
    return(
        <Box as='section' bg={'#F26C4F'} width={'100vw'}  id='contacto' > 
            <Flex width={{lg:'80vw', sm:'90vw'}} 
            margin={'0 auto'} 
            py={'5rem'} 
            gap={{lg:'1rem'}} 
            flexDirection={{lg:'row', sm:'column'}}
            alignItems={{lg:'start', sm:'center'}}>
                <TextoContacto />
                <Formulario />
            </Flex>
        </Box>
    )
}

export { Contacto }