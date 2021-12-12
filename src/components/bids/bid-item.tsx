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
import { ROUTES } from '@/constants/routes'

type Props = {
  item: BidListProps['edges'][0]['node']
}

const BidItem = ({ item }: Props) => (
  <LinkBox as={Card} variant="smooth" className="bid-card">
    <AspectRatio
      ratio={0.9}
      width="full"
      bg={useColorModeValue('gray.100', 'black.4')}
      overflow="hidden"
      borderRadius="2xl"
      position="relative"
      _after={{
        content: '"→"',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 12,
        height: 12,
        borderRadius: 'full',
        background: 'whiteAlpha.800',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.5s ease-in-out',
      }}
      sx={{
        '.bid-card:hover > &:after': {
          opacity: 1,
          visibility: 'visible',
        },
      }}
    >
      <Image
        layout="fill"
        objectFit="cover"
        src={item?.image?.thumbnail || ''}
        placeholder="blur"
        blurDataURL={item?.image?.blurDataURL || ''}
        transition="transform 1s"
        sx={{
          '.bid-card:hover &': {
            transform: 'scale(1.1)',
          },
        }}
      />
    </AspectRatio>
    <VStack spacing={2} py={3} alignItems="flex-start" w="full">
      <Heading fontSize="sm" maxWidth="full" isTruncated pb={1}>
        <LinkOverlay href={`${ROUTES.BID}/${item.slug}`}>
          {item.title}
        </LinkOverlay>
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
