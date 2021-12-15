import { useRouter } from 'next/router'
import { Container, VStack, Box } from '@chakra-ui/react'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import { AUTHORS_PER_PAGE, BIDS_PER_PAGE } from '@/constants/items'
import SearchAndFiltersPanel from '@/components/search-and-filters-panel'
import SectionTitle from '@/components/section-title'
import BidList from '@/components/bids/bid-list'
import ErrorMessage from '@/components/error-message'
import { getAuthors, getBids } from 'data/index'
import { BidListProps } from '@/types/bids'
import { AuthorListProps } from '@/types/authors'

type Props = {
  bids: BidListProps
  authors: AuthorListProps
  search: string
}

const BidsPage = ({ authors, bids, search }: Props) => {
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
      <SectionTitle
        title={`Search Results by title ${search}` || 'All Bids'}
        mb={0}
      />
      <SearchAndFiltersPanel />
      <BidList items={bids.edges} w="full" />
    </Container>
  )
}

BidsPage.getInitialProps = async ({ query: { slug = '', search = '' } }) => {
  const authors = (await getAuthors(AUTHORS_PER_PAGE)) ?? []
  const bids = (await getBids(BIDS_PER_PAGE, 0, slug, search)) ?? []
  return {
    authors,
    bids,
    search,
    fallback: true,
  }
}

export default BidsPage
