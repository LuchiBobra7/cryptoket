import { useRouter } from 'next/router'
import { Container, Box, VStack, Text, Avatar, Heading } from '@chakra-ui/react'
import SearchAndFiltersPanel from '@/components/search-and-filters-panel'
import Image from '@/components/image'
import ErrorMessage from '@/components/error-message'
import BidList from '@/components/bids/bid-list'
import AuthorAvatar from '@/components/authors/author-avatar'
import { getAuthor, getBids } from '@/data/index'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import { AUTHOR_IMAGE_SIZE } from '@/constants/images'
import { BIDS_PER_PAGE } from '@/constants/items'
import { AuthorDetailsProps } from '@/types/authors'
import { BidListProps } from '@/types/bids'
import { QueryProps } from '@/types/query'

type Props = {
  authorDetails: AuthorDetailsProps['author']
  bids: BidListProps
}

const AuthorPage = ({ authorDetails, bids }: Props) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return 'Loading...'
  }

  if (!authorDetails && !bids) {
    return <ErrorMessage />
  }

  return (
    <>
      <Box
        as="header"
        position="relative"
        bgColor="blue.800"
        height={300}
        width="full"
      >
        <Image
          src={authorDetails?.bgImage?.thumbnail || ''}
          placeholder="blur"
          blurDataURL={authorDetails?.bgImage?.blurDataURL}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <VStack spacing={4}>
        <AuthorAvatar
          avatarSize={AUTHOR_IMAGE_SIZE.LG}
          image={authorDetails?.image}
          isVerified={authorDetails?.isVerified}
          marginTop={`-${AUTHOR_IMAGE_SIZE.LG / 2}`}
          borderWidth={5}
          borderColor="black.1"
        />
        <Heading fontSize="3xl">{authorDetails?.name}</Heading>
      </VStack>
      <Container
        as={VStack}
        py={V_SPACING_BETWEEN_PAGE_SECTIONS}
        spacing={V_SPACING_BETWEEN_PAGE_SECTIONS}
      >
        <SearchAndFiltersPanel>
          {/*TODO: modify to '43,775,476 results' format */}
          <Text>{bids.edges.length} results</Text>
        </SearchAndFiltersPanel>
        <BidList w="full" items={bids.edges} />
      </Container>
    </>
  )
}

AuthorPage.getInitialProps = async ({
  query: { search, orderBy, slug },
}: QueryProps) => {
  //TODO: one request for author details && author's bids
  const authorDetails = await getAuthor(slug as string)
  const bids = (await getBids(BIDS_PER_PAGE, 0, slug, search, orderBy)) ?? []
  return {
    bids,
    authorDetails,
    fallback: true,
  }
}

export default AuthorPage
