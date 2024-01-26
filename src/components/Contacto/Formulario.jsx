import React, { useState } from 'react';
import { FormControl, Input,Textarea, Button, Text} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
const Formulario = () => {
    const {register,formState:{errors}, handleSubmit, reset} = useForm()
    const [enviado, setEnviado] = useState(false);
    const [noEnviado, setNoEnviado] = useState(false);
    
    const enviar = async (data) => {
    try {
        const response = await fetch('https://formspree.io/f/xgejvopq', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        setEnviado(true)
        reset()
    } else {
        setNoEnviado(true)
    }
    } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);   
    }
};


    const formularioEstilo={
        display:'flex', 
        flexDirection:'column',
        alignItems:'start',
        gap:2,
        boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.25)',
        py:'2rem',
        borderRadius: '5px',
    }
    const inputEstilo = {
        bg:'white',
        py:'1.8rem',
        px: '0.6rem',
        color: "#F26C4F",
        fontWeight:600,
        cursor:'pointer',
        "&::placeholder": {
            color: "#F26C4F",
            fontWeight:600,
            fontSize:'1.1rem'
            },
    }
    const textareaEstilo ={
        resize:'none', 
        px: '0.6rem',
        bg:'white',
        color: "#F26C4F",
        fontWeight:600,
        cursor:'pointer',
        "&::placeholder": {
            color: "#F26C4F",
            fontWeight:600,
            fontSize:'1.1rem'
            },
    }
    const btnFormulario ={
        bg:'transparent',
        border:'1px solid white',
        color:'white',
        p:'0.7rem 2rem',
        fontWeight:400,
        letterSpacing:'1px',
        mt:'0.5rem',
        alignSelf:'end',
        transition:'all 250ms',
        _hover:{
            bg:'white',
            color:'#F26C4F'
        }
    }
    return(
        <>

            <FormControl as={'form'} action="https://formspree.io/f/xgejvopq" method="POST" sx={formularioEstilo} onSubmit={handleSubmit(enviar)}
        order={{lg:'2', sm:'1'}} 
        flexBasis={{xl1:'90%', lg:'80%',md:'80%', sm:'90%'}} 
        p={{xl: '2rem 2.4rem', lg:'1.4rem 1rem', sm:'1.4rem 1rem'}}>

                <Input type='text' 
                {...register('nombre',{required:true})} 
                sx={inputEstilo} 
                id="nombre"
                name="nombre"
                focusBorderColor='white' 
                placeholder='Tu Nombre' />
                {errors.nombre?.type === 'required' && <Text color={'white'} fontWeight={'500'}>El campo nombre es requerido</Text>}


                <Input 
                {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i  })}
                sx={inputEstilo} 
                id="email"
                type="text" 
                name="email"
                focusBorderColor='white' 
                placeholder='Tu Correo Electronico'  />
                {errors.email?.type === 'required' && <Text color={'white'} fontWeight={'500'}>El campo email es requerido</Text>}
                {errors.email?.type === 'pattern' && <Text color="black" fontWeight="500">El correo electrónico no es válido</Text>}
            
                <Textarea sx={textareaEstilo} 
                {...register('mensaje', {required:true})} 
                id="mensaje"
                name="mensaje"
                focusBorderColor='white'  
                height={{md:'13rem', sm:'10rem'}} 
                placeholder="Mensaje..."   />
                {errors.mensaje?.type === 'required' && <Text color={'white'} fontWeight={'500'}>El campo mensaje es requerido</Text>}
            
                {enviado && 
                <Text color={'white'} fontWeight={'500'} fontSize={{sm3:'1.1rem', sm:'0.9rem'}} >
                    Tus datos se han enviado correctamente!
                </Text>}
                {noEnviado && 
                <Text color={'black'} fontWeight={'500'} fontSize={{sm3:'1.1rem', sm:'0.9rem'}} >
                    Tus datos no se han enviado correctamente!
                </Text>}
            
                <Button sx={btnFormulario} type='submit'>Enviar</Button>
        </FormControl>
        
        </>
    )
}

export { Formulario }