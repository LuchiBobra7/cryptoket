import { Container, VStack, Box } from '@chakra-ui/react'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import SectionTitle from '@/components/section-title'

const MyBidsPage = () => {
  return (
    <Container
      maxW="container.md"
      py={V_SPACING_BETWEEN_PAGE_SECTIONS}
      as={VStack}
      spacing={V_SPACING_BETWEEN_PAGE_SECTIONS}
      alignItems="flex-start"
    >
      <Box as="section" w="full">
        <SectionTitle title="Create new item" />
      </Box>
    </Container>
  )
}

export default MyBidsPage
