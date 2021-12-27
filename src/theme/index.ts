import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import breakpoints from './breakpoints'
import typography from './typography'
import colors from './colors'
import sizes from './sizes'
import Container from './components/container'
import Button from './components/button'
import Input from './components/input'
import Textarea from './components/textarea'
import Card from './components/card'
import Menu from './components/menu'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const { fonts, fontSizes, Heading } = typography

const theme = extendTheme({
  config,
  styles: {
    global: (props: Dict) => ({
      '*': {
        borderColor: mode('blackAlpha.100', 'whiteAlpha.50')(props),
      },
      '::placeholder': {
        color: mode('gray.2', 'whiteAlpha.800')(props),
      },
      body: {
        bg: mode('white', 'black.4')(props),
        color: mode('black.2', 'gray.1')(props),
      },
      '[class*=chakra-input], [class*=chakra-select]': {
        color: mode('gray.2', 'whiteAlpha.800')(props),
      },
    }),
  },
  breakpoints,
  colors,
  fonts,
  fontSizes,
  sizes,
  components: {
    Button,
    Input,
    Select: Input,
    Textarea,
    Card,
    Container,
    Heading,
    Menu,
  },
})

export default theme
