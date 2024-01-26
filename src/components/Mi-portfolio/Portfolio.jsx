import React from 'react';
import { Box, Image,Text, Flex,Link} from '@chakra-ui/react';



const Portfolio = ({imagen, link, titulo,descripcion}) => {
    const imgPortfolio ={
        borderRadius:10
    }
    const sobreImg={
        position:'absolute',
        top:0,
        bg:'#222222',
        opacity:0.7,
        borderRadius:10,
        transition:'all 300ms',
        cursor:'pointer'
    }
    const textoSobreImg ={
        color:'white',
        position:'absolute',
        width:'100%',
        textAlign:'center',
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        fontWeight:700,
        letterSpacing:'2px',
        transition:'all 300ms'
    }
    const descripcionSobreImg ={
        color:'white',
        position:'absolute',
        width:'100%',
        textAlign:'center',
        top:"75%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        fontWeight:700,
        letterSpacing:'2px',
        transition:'all 300ms'
    }
    const ejemplo = {
        position: 'relative',
        transition: 'all 300ms',
        overflow:'hidden',
        _hover: {
            "& > div": {
            transform: 'translateX(55rem)',
            },
            "& > h3": {
            transform: 'translate(150%, -50%)',
            },
        },
    };
    return(
        <>
            <Box sx={ejemplo} position={'relative'}>
                <Link href={link} target='_blank'>
                    <Image 
                    src={imagen} 
                    sx={imgPortfolio} 
                    loading="lazy"
                    alt="Portfolio"
                    width={{lg:'39vw', sm:'85vw'}} 
                    height={{xxl:'20rem', xl:'16rem'}} />
                </Link>
                <Flex sx={sobreImg}
                width={{lg:'39vw', sm:'85vw'}} 
                height={{xxl:'20rem', sm:'28rem'}} ></Flex>
                <Text as={'h3'} 
                fontSize= {{xl:'2.5rem',lg:'2rem',md:"2.5rem", sm2:'1.8rem', sm:'1.4rem'}}  
                sx={textoSobreImg}>{titulo}</Text>
                <Text as={'h3'} 
                fontSize= {{xl:'2rem',lg:'1.5rem',md:"2rem", sm2:'1.4rem', sm:'0.8rem'}}  
                sx={descripcionSobreImg}>{descripcion}</Text>
            </Box>
            
        </>
    )
}

export { Portfolio }