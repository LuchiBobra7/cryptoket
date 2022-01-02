import { Dict } from '@chakra-ui/utils'

const Table = {
  baseStyle: (props: Dict) => ({
    th: {
      textTransform: 'none',
    },
  }),
  sizes: {
    md: {
      th: { fontSize: 'md' },
    },
  },
}

export default Table
