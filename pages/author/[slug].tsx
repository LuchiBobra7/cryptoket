import { useRouter } from 'next/router'
import {
  Container,
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Select,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import SearchBar from '@/components/search-bar'
import Image from '@/components/image'
import EmptyData from '@/components/empty-data'
import ErrorMessage from '@/components/error-message'
import BidList from '@/components/bids/bid-list'
import { getAuthor, getAuthors, getBids } from 'data/index'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import { AUTHOR_IMAGE_SIZE } from '@/constants/images'
import { AUTHORS_PER_PAGE, BIDS_PER_PAGE } from '@/constants/items'
import { AuthorDetailsProps } from '@/types/authors'
import { BidListProps } from '@/types/bids'

type Props = {
  authorDetails: AuthorDetailsProps['author']
  bids: BidListProps
}

const AuthorPage = ({ authorDetails, bids }: Props) => {
  const iconColor = useColorModeValue('gray.2', 'white')
  const { isFallback } = useRouter()

  if (isFallback) {
    return 'Loading...'
  }

  if (!authorDetails) {
    return <ErrorMessage />
  }

  return (
    <>
      <Box
        as="header"
        position="relative"
        bgColor="blue.800"
        height={300}
        width="100%"
      >
        <Image
          src={authorDetails.bgImage?.thumbnail}
          placeholder="blur"
          blurDataURL={authorDetails.bgImage?.blurDataURL}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <VStack spacing={4}>
        <Avatar
          width={AUTHOR_IMAGE_SIZE.LG}
          height={AUTHOR_IMAGE_SIZE.LG}
          marginTop={`-${AUTHOR_IMAGE_SIZE.LG / 2}`}
          src={authorDetails.image?.thumbnail}
          borderWidth={5}
          borderColor="black.1"
        />
        <Heading fontSize="3xl">{authorDetails.name}</Heading>
      </VStack>
      {!!bids.edges.length ? (
        <Container
          as={VStack}
          py={V_SPACING_BETWEEN_PAGE_SECTIONS}
          spacing={V_SPACING_BETWEEN_PAGE_SECTIONS}
        >
          <HStack spacing={7} w="full">
            <SearchBar flex={2.5} />
            <Select
              placeholder="Select option"
              flex={1}
              color={iconColor}
              icon={<Icon as={BsChevronDown} w={38} h={38} />}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>

          <BidList w="full" items={bids.edges} />
        </Container>
      ) : (
        <EmptyData />
      )}
    </>
  )
}

export async function getStaticPaths() {
  const authors = (await getAuthors(AUTHORS_PER_PAGE)) || []
  return {
    paths: authors.edges.map(({ node }) => `/author/${node.slug}`),
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const authorDetails = await getAuthor(params.slug as string)
  if (authorDetails) {
    const bids = (await getBids(BIDS_PER_PAGE, 0, params.slug as string)) || []
    return {
      props: {
        authorDetails,
        bids,
        fallback: true,
      },
    }
  }
}

export default AuthorPage
