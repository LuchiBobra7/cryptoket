import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const Menu = {
  baseStyle: (props: Dict) => ({
    list: {
      fontSize: '14px',
      bg: mode('white', 'blackAlpha.900')(props),
      color: mode('gray.3', 'white')(props),
    },
    item: {
      _first: {
        bg: 'transparent',
      },

      _hover: {
        bg: mode('blackAlpha.50', 'whiteAlpha.50')(props),
        color: mode('black.1', 'white')(props),
      },
    },
  }),
}

export default Menu
