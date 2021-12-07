import { FC } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

type Props = {
  variant: string
  [x: string]: any
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
