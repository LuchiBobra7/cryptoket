import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const Card = {
  baseStyle: (props: Dict) => ({
    display: 'flex',
    flexDirection: 'column',
    background: mode('white', 'black.1')(props),
    alignItems: 'center',
    gap: 6,
  }),

  variants: {
    smooth: {
      padding: 3,
      borderRadius: '2xl',
      filter: 'drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.1))',
    },
    outline: (props: Dict) => ({
      padding: 6,
      borderRadius: '2xl',
      borderWidth: 1,
      borderColor: mode('gray.200', 'black.1')(props),
    }),
  },

  defaultProps: {
    variant: 'outline',
  },
}

export default Card
