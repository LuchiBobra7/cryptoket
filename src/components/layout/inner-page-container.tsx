import { FC, ComponentProps } from 'react'
import { Container, VStack } from '@chakra-ui/react'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'

type Props = ComponentProps<typeof Container>

const InnerPageContainer: FC<Props> = ({ children, ...props }) => {
  return (
    <Container
      as={VStack}
      alignItems="flex-start"
      py={V_SPACING_BETWEEN_PAGE_SECTIONS}
      spacing={V_SPACING_BETWEEN_PAGE_SECTIONS}
      {...props}
    >
      {children}
    </Container>
  )
}

export default InnerPageContainer
