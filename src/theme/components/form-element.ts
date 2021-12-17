import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

export const sizes = {
  md: {
    minH: '2.6rem',
    fontSize: 'sm',
    borderRadius: 'xl',
  },
}

export const variants = {
  outline: (props: Dict) => ({
    borderColor: mode('gray.1', 'black.1')(props),
    backgroundColor: mode('white', 'black.1')(props),
    color: mode('gray.2', 'white')(props),
    transition: 'all 0.2s ease-in',
    _hover: {
      borderColor: mode('gray.1', 'black.1')(props),
    },
    _focus: {
      borderColor: mode('gray.1', 'black.1')(props),
      boxShadow: '0 0px 6px rgba(0, 0, 0, 0.2)',
    },
  }),
  filled: (props: Dict) => ({
    backgroundColor: mode('white', 'black.2')(props),
  }),
}
