import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const Modal = {
  baseStyle: (props: Dict) => ({
    dialog: {
      bg: mode('white', 'black.3')(props),
    },
    header: {
      py: 6,
    },
    footer: {
      py: 6,
    },
  }),
}

export default Modal
