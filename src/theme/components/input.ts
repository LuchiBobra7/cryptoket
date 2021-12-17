import { Dict } from '@chakra-ui/utils'
import { sizes, variants } from './form-element'

const Input = {
  sizes: {
    md: {
      field: {
        ...sizes.md,
      },
    },
  },
  variants: {
    outline: (props: Dict) => ({
      field: variants.outline(props),
    }),
    filled: (props: Dict) => ({
      field: variants.filled(props),
    }),
  },
}

export default Input
