import {
  Heading,
  VStack,
  AspectRatio,
  Text,
  useColorModeValue,
  LinkBox,
} from '@chakra-ui/react'
import LinkOverlay from '@/components/link/link-overlay'
import Card from '@/components/card'
import Image from '@/components/image'
import { BidListProps } from '@/types/bids'

type Props = {
  item: BidListProps['edges'][0]['node']
}

const BidItem = ({ item }: Props) => (
  <LinkBox as={Card} variant="smooth">
    <AspectRatio
      ratio={0.9}
      width="full"
      bg={useColorModeValue('gray.100', 'black.4')}
      overflow="hidden"
      borderRadius="2xl"
      position="relative"
    >
      <Image
        layout="fill"
        objectFit="cover"
        src={item?.image?.thumbnail || ''}
        placeholder="blur"
        blurDataURL={item?.image?.blurDataURL || ''}
      />
    </AspectRatio>
    <VStack spacing={2} py={3} alignItems="flex-start" w="full">
      <Heading fontSize="sm">
        <LinkOverlay href={`/bid/${item.slug}`}>{item.title}</LinkOverlay>
      </Heading>
      {item.price ? (
        <Heading as="p" fontSize="sm">
          {item.price}{' '}
          <Text as="span" fontWeight="normal">
            ETH
          </Text>
        </Heading>
      ) : (
        '-'
      )}
    </VStack>
  </LinkBox>
)

export default BidItem
