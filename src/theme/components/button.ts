import { sizes } from './form-element'
import { pinkRing } from './additional'
import { Dict } from '@chakra-ui/utils'

const Button = {
  baseStyle: (props: Dict) => ({
    fontWeight: 'bold',
    ...pinkRing(props),
  }),
  sizes: {
    md: {
      ...sizes.md,
    },
  },
  variants: {
    primary: {
      bg: 'redLinear',
      backgroundSize: '200% auto',
      color: 'white',
      transition: '0.3s',
      _hover: {
        backgroundPosition: 'right center',
        boxShadow: '0 1px 7px rgba(235, 20, 132, 0.2)',
        '&[disabled]': {
          bg: 'pink.500',
        },
      },
    },

    outline: {
      color: 'rgba(235, 20, 132, 0.8)',
      _hover: {
        bgColor: 'rgba(235, 20, 132, 0.07)',
      },
    },
  },
}

export default Button
