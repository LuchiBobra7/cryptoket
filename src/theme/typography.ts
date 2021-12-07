import { theme as baseTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const typography = {
  fonts: {
    heading: `Poppins, ${baseTheme.fonts?.heading}`,
    body: `Poppins, ${baseTheme.fonts?.body}`,
  },
  fontSizes: {
    '3xl': '1.75rem',
  },
  Heading: {
    baseStyle: (props: Dict) => ({
      fontWeight: 600,
      color: mode('black.2', 'gray.1')(props),
    }),
  },
}

export default typography
