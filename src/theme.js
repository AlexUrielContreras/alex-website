import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
   fonts: {
      heading: 'Nunito, sans-serif',
      body: 'Roboto, sans-serif',
   },
   
   fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
   }
})


export default theme;