import { Flex, Link, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const TextoContacto = () => {

    const redesContacto={
        color:'#F26C4F',
        bg:'black',
        border:'1px solid black',
        borderRadius:'50%',
        p:'0.2rem 0.6rem',
        fontSize:'1.6rem',
        transition:'all 250ms',
        cursor:'pointer',
        _hover:{
            bg:'#F26C4F',
            color:'black'
        }
    }
    return(
            <Flex  margin={'0 auto'} py={25} flexBasis={'70%'} order={{lg:'1', sm:'2'}}>
                <Flex flexDirection={'column'} alignItems={{lg:'start', sm:'center'}} gap={10} >
                    <Text as={'h2'} 
                    color={'white'} 
                    fontWeight={700} 
                    fontSize={{xxl:'2.6rem',xl1:'2.4rem',lg1:'2.2rem', lg:'1.8rem', sm3:'2.5rem', sm1:'1.4rem', sm:'1.2rem'}} 
                    width={{sm1:'95%', sm:'90%'}} 
                    lineHeight={{lg:'48px', md:'45px',sm3:'40px', sm:'30px'}}
                    textAlign={{lg:'start', sm:'center'}}>
                        Hagamos algo realmente <span style={{color:'#262626'}}>fenomenal</span>.
                    </Text>
                    <Flex flexDirection={'column'} alignItems={{lg:'start', sm:'center'}} gap={4}>
                        <Flex alignItems={'center'} gap={2}>  
                            <FontAwesomeIcon icon={faPhone} fontSize={{sm2:'1.5rem', sm:'1.2rem'}} color="white"/>
                            <Text fontSize={{md:'1.1rem',sm2:'1rem',sm:'0.8rem'}} color={'white'}>+ 54 2494-358110</Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={4}>
                            <FontAwesomeIcon icon={faEnvelope} fontSize={{sm2:'1.5rem', sm:'1.2rem'}}  color="white"/>
                            <Link fontSize={{md:'1.1rem',sm2:'1rem',sm:'0.8rem'}} color={'white'}  href="mailto:ejemplo@correo.com">ignaciofernandezdeveloper@gmail.com</Link>
                        </Flex>
                    </Flex>
                    <Flex gap={{sm1:'1.8rem', sm:'1rem'}}>
                        <Link sx={redesContacto} href="https://www.facebook.com/nacho.fernandez.737/" target='_blank'><i className="bi bi-facebook"></i></Link>
                        <Link sx={redesContacto} href="https://www.instagram.com/nachofernandezdev/" target='_blank'><i className="bi bi-instagram"></i></Link>
                        <Link sx={redesContacto} href="https://www.linkedin.com/in/ignacio-fernandez-45666b1a7/" target='_blank'><i className="bi bi-linkedin"></i></Link>
                        <Link sx={redesContacto} href="https://github.com/nachof948" target='_blank'><i className="bi bi-github"></i></Link>
                    </Flex> 
                </Flex>
            </Flex>

    )
}

export { TextoContacto }