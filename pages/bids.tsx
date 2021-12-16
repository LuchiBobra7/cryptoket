import { useRouter } from 'next/router'
import { Container, VStack, Box } from '@chakra-ui/react'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import { BIDS_PER_PAGE } from '@/constants/items'
import InnerPageContainer from '@/components/layout/inner-page-container'
import SearchAndFiltersPanel from '@/components/search-and-filters-panel'
import BidList from '@/components/bids/bid-list'
import ErrorMessage from '@/components/error-message'
import { getBids } from '@/data/index'
import { BidListProps } from '@/types/bids'
import { QueryProps } from '@/types/query'

type Props = {
  bids: BidListProps
  search: string
}

const BidsPage = ({ bids, search }: Props) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return 'Loading'
  }

  if (!bids) {
    return <ErrorMessage />
  }

  return (
    <InnerPageContainer>
      <SearchAndFiltersPanel
        title={
          !!search?.length ? `Search Results by title ${search}` : 'All Bids'
        }
      />
      <BidList items={bids.edges} w="full" />
    </InnerPageContainer>
  )
}

BidsPage.getInitialProps = async ({
  query: { search, slug, orderBy },
}: QueryProps) => {
  const bids = (await getBids(BIDS_PER_PAGE, 0, search, slug, orderBy)) ?? []
  return {
    bids,
    search,
    fallback: true,
  }
}

export default BidsPage
