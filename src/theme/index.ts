import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import typography from './typography'
import colors from './colors'
import sizes from './sizes'
import Container from './components/container'
import Button from './components/button'
import Input from './components/input'
import Textarea from './components/textarea'
import Card from './components/card'
import Menu from './components/menu'
import Modal from './components/modal'
import Table from './components/table'
import Form from './components/form'
import FormError from './components/form-error'

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
        overflowX: 'hidden',
        bg: mode('white', 'black.4')(props),
        color: mode('black.2', 'gray.1')(props),
      },
      '[class*=chakra-input], [class*=chakra-select]': {
        color: mode('gray.2', 'whiteAlpha.800')(props),
      },
      ':root .chakra-form-control [aria-invalid=true]': {
        borderColor: mode('red.500', 'red.300')(props),
        borderStyle: 'solid',
        boxShadow: '0 0 0 1px rgba(229, 62, 62, 0.5)',
      },
    }),
  },
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
    Modal,
    Table,
    Form,
    FormError,
  },
})

export default theme
