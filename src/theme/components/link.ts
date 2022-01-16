import { Dict } from '@chakra-ui/utils'
import { pinkRing } from './additional'

const Link = {
  baseStyle: (props: Dict) => ({
    ...pinkRing(props),
  }),
}

export default Link
