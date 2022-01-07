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
  page: number | string
  pagesQuantity: number | string
}

const BidsPage = ({ bids, search, page, pagesQuantity }: Props) => {
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
      <BidList
        items={bids.edges}
        w="full"
        pageInfo={bids.pageInfo}
        activePage={Number(page)}
        pagesQuantity={Number(pagesQuantity)}
      />
    </InnerPageContainer>
  )
}

export const getServerSideProps = async ({
  query: { page = 1, slug = '', search = '', orderBy },
}: QueryProps) => {
  const limit = BIDS_PER_PAGE
  const skip = (Number(page) - 1) * limit
  const bids = (await getBids(limit, skip, slug, search, orderBy)) ?? []
  const { count: bidsQuantity } = bids?.aggregate ?? 0
  const pagesQuantity = Math.ceil(bidsQuantity / limit) ?? 0
  return {
    props: {
      bids,
      search,
      page,
      pagesQuantity,
      fallback: true,
    },
  }
}

export default BidsPage
