import { Box } from '@chakra-ui/react'
import InnerPageContainer from '@/components/layout/inner-page-container'
import SectionTitle from '@/components/section-title'

const MyBidsPage = () => {
  return (
    <InnerPageContainer>
      <Box as="section" w="full">
        <SectionTitle title="Private Route" />
      </Box>
    </InnerPageContainer>
  )
}

export default MyBidsPage
