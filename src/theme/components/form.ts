import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const Form = {
  baseStyle: (props: Dict) => ({
    helperText: {
      fontSize: 'xs',
      color: mode('gray.2', 'whiteAplha.800')(props),
    },
  }),
}

export default Form
