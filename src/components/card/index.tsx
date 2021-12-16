import { FC, ComponentProps } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

type Props = ComponentProps<typeof Box> & {
  variant: string
}

const Card: FC<Props> = ({ variant, children, ...props }) => {
  const styles = useStyleConfig('Card', { variant })

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...props}>
      {children}
    </Box>
  )
}

export default Card
