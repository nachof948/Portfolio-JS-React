import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: '270px',
  sm1: '350px',
  sm2:'400px',
  sm3:'520px',
  md: '768px',
  md1: '900px',
  lg: '1024px',
  lg1:'1150px',
  xl: '1280px',
  xl1: '1450px',
  xxl: '1570px'
}
const theme = extendTheme({
  styles: {
    global: {
      html:{
        scrollBehavior: 'smooth'
      },
      body: {
        bg: "#222222",
        overflowX:'hidden',
      },
    },
  },
  fonts: {
    body: "'Urbanist', sans-serif",
    heading: "'Urbanist', sans-serif",
  },
  breakpoints: breakpoints,
});

export{ theme } ;