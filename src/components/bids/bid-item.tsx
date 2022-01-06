import { useState, SyntheticEvent } from 'react'
import {
  Heading,
  VStack,
  AspectRatio,
  Text,
  LinkBox,
  Flex,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import LinkOverlay from '@/components/link/link-overlay'
import Card from '@/components/card'
import Image from '@/components/image'
import { BidListProps } from '@/types/bids'
import { ROUTES } from '@/constants/routes'
import { CURRENCY } from '@/constants/main'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

type Props = {
  item: BidListProps['edges'][0]['node']
}

const BidItem = ({ item }: Props) => {
  const [isLiked, setIsLikes] = useState<boolean>(false)

  const toggleIsLiked = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLikes(!isLiked)
  }
  return (
    <LinkBox as={Card} variant="smooth" className="bid-card">
      <AspectRatio
        ratio={1}
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
          background: useColorModeValue('whiteAlpha.500', 'blackAlpha.700'),
          border: '1px solid',
          borderColor: useColorModeValue('whiteAlpha.300', 'blackAlpha.300'),
          backdropFilter: 'blur(12px)',
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
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Heading as="p" fontSize="sm">
            {item.price}{' '}
            <Text as="span" fontWeight="normal">
              {CURRENCY}
            </Text>
          </Heading>
          <Button
            aria-label={`${isLiked ? 'Unlike' : 'Like'} post`}
            p={0}
            minW="auto"
            minH="auto"
            h="auto"
            variant="unstyled"
            onClick={(e) => toggleIsLiked(e)}
            boxShadow="none !important"
          >
            <Icon as={isLiked ? AiFillHeart : AiOutlineHeart} w={4} h={4} />
          </Button>
        </Flex>
      </VStack>
    </LinkBox>
  )
}

export default BidItem
