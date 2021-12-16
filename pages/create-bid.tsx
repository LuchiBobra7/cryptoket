import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import SectionTitle from '@/components/section-title'
import InnerPageContainer from '@/components/layout/inner-page-container'

const CreateBidPage = () => {
  return (
    <InnerPageContainer maxW="container.sm">
      <Box as="section" w="full">
        <SectionTitle title="Create new item" />
        <VStack as="form" spacing={7} w="full">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input />
          </FormControl>
          <Button alignSelf="flex-end" variant="primary">
            Create item
          </Button>
        </VStack>
      </Box>
    </InnerPageContainer>
  )
}

export default CreateBidPage
