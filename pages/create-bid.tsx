import { Box } from '@chakra-ui/react'
import SectionTitle from '@/components/section-title'
import InnerPageContainer from '@/components/layout/inner-page-container'

const MyBidsPage = () => {
  return (
    <InnerPageContainer>
      <Box as="section" w="full">
        <SectionTitle title="Create new item" />
      </Box>
    </InnerPageContainer>
  )
}

export default MyBidsPage
