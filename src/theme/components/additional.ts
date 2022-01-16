import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

export const pinkRing = (props: Dict) => ({
  _focus: {
    ringColor: mode('pink.200', 'pink.300')(props),
    ring: 2,
  },
})
