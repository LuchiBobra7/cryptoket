import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const Textarea = {
  sizes: {
    md: {
      field: {
        fontSize: 'sm',
      },
    },
  },
  variants: {
    outline: (props: Dict) => ({
      borderColor: mode('gray.1', 'black.2')(props),
      backgroundColor: mode('white', 'black.2')(props),
      color: mode('gray.2', 'white')(props),
      borderRadius: 'xl',
    }),
    filled: (props: Dict) => ({
      backgroundColor: mode('white', 'black.2')(props),
    }),
  },
}

export default Textarea
