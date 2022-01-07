import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const FormError = {
  baseStyle: (props: Dict) => ({
    text: {
      fontSize: 'xs',
      color: mode('red.500', 'red.200')(props),
    },
  }),
}

export default FormError
