import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import breakpoints from './breakpoints'
import typography from './typography'
import colors from './colors'
import sizes from './sizes'
import Container from './components/container'
import Button from './components/button'
import Input from './components/input'
import Card from './components/card'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: Dict) => ({
      '*': {
        borderColor: mode('blackAlpha.100', 'gray.4')(props),
      },
      '::placeholder': {
        color: mode('gray.2', 'whiteAlpha.800')(props),
      },
      body: {
        bg: mode('white', 'black.4')(props),
        color: mode('black.2', 'gray.1')(props),
      },
    }),
  },
  breakpoints,
  colors,
  fonts: typography.fonts,
  fontSizes: typography.fontSizes,
  sizes,
  components: {
    Button,
    Input,
    Select: Input,
    Card,
    Container,
    Heading: typography.Heading,
  },
})

export default theme
