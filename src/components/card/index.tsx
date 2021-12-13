import { FC, ComponentProps } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

type Props = ComponentProps<typeof Box> & {
  variant: string
}

const Card: FC<Props> = (props) => {
  const { variant, children, ...rest } = props

  const styles = useStyleConfig('Card', { variant })

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default Card
