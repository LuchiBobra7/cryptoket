import {
  VStack,
  AspectRatio,
  Skeleton,
  LinkBox,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from '@/components/card'

const BidItem = () => (
  <LinkBox as={Card} variant="smooth" className="bid-card">
    <AspectRatio
      ratio={1}
      width="full"
      bg={useColorModeValue('gray.100', 'black.4')}
      overflow="hidden"
      borderRadius="2xl"
      position="relative"
    >
      <Skeleton w="full" h="full" />
    </AspectRatio>
    <VStack spacing={2} py={3} alignItems="flex-start" w="full">
      <Skeleton w="full" h="20px" />=
      <Skeleton w="50px" h="20px" />
    </VStack>
  </LinkBox>
)

export default BidItem
