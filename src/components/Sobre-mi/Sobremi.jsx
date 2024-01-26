import React from 'react';
import { Box,Flex} from '@chakra-ui/react';
import { Imgsobremi, Textosobremi,Cv } from '../../index';

const Sobremi = () => {

const sectionSobreMi ={
    bg:'#262626',
    py:'5rem',
    width:'100vw'
}
const sobreMiContenedor={
    margin: '0 auto',
    justifyContent:'center',
    alignItems:'center'
}
    return(
        <Box as='section' sx={sectionSobreMi} id='sobre-mi'>
            <Flex sx={sobreMiContenedor} 
            width={{ lg: '80vw', sm: '90vw' }} 
            flexDirection={{lg:'row', sm:'column' }} 
            gap={{xl:'5rem', lg:'1rem', sm:'2.5rem'}}>
                <Imgsobremi flexBasis={'20%'}/>
                <Flex direction={'column'} align={'start'} gap={9} flexBasis={'80%'}>
                    <Textosobremi/>
                    <Cv section='sobremi' />
                </Flex>
            </Flex>
        </Box>
    )
}

export { Sobremi }