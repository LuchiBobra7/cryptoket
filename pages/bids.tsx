import { useRouter } from 'next/router'
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

export const getServerSideProps = async ({
  query: { slug = '', search = '', orderBy },
}: QueryProps) => {
  const bids = (await getBids(BIDS_PER_PAGE, 0, slug, search, orderBy)) ?? []
  return {
    props: {
      bids,
      search,
      fallback: true,
    },
  }
}

export default BidsPage
