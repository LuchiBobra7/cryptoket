import { useRouter } from 'next/router'
import { Container, VStack, Box, Button } from '@chakra-ui/react'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import { AUTHORS_PER_PAGE, BIDS_PER_PAGE } from '@/constants/items'
import Banner from '@/components/banner'
import SectionTitle from '@/components/section-title'
import AuthorList from '@/components/authors/author-list'
import BidList from '@/components/bids/bid-list'
import ErrorMessage from '@/components/error-message'
import EmptyData from '@/components/empty-data'
import { getAuthors, getBids } from 'data/index'
import { BidListProps } from '@/types/bids'
import { AuthorListProps } from '@/types/authors'

type Props = {
  bids: BidListProps
  authors: AuthorListProps
}

const HomePage = ({ authors, bids }: Props) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return 'Loading'
  }

  if (!authors) {
    return <ErrorMessage />
  }

  return (
    <Container
      py={V_SPACING_BETWEEN_PAGE_SECTIONS}
      as={VStack}
      spacing={V_SPACING_BETWEEN_PAGE_SECTIONS}
      alignItems="flex-start"
    >
      <Banner />
      <Box as="section" w="full">
        <SectionTitle title="Top Sellers" />
        {!!authors.edges.length ? (
          <AuthorList items={authors.edges} />
        ) : (
          <EmptyData />
        )}
      </Box>
      <Box as="section" w="full">
        <SectionTitle title="Hot Bids" />
        {!!bids.edges.length ? (
          <>
            <BidList items={bids.edges} />
            {bids.pageInfo.hasNextPage && (
              <Button
                colorScheme="pink"
                variant="outline"
                display="flex"
                minW={240}
                mt={V_SPACING_BETWEEN_PAGE_SECTIONS}
                mx="auto"
              >
                View More
              </Button>
            )}
          </>
        ) : (
          <EmptyData />
        )}
      </Box>
    </Container>
  )
}

HomePage.getInitialProps = async ({ query: { slug = '' } }) => {
  const authors = (await getAuthors(AUTHORS_PER_PAGE)) || []
  const bids = (await getBids(BIDS_PER_PAGE, 0, slug)) || []
  return {
    authors,
    bids,
    fallback: true,
  }
}

export default HomePage
