import { useRouter } from 'next/router'
import { Container, VStack } from '@chakra-ui/react'
import SearchAndFiltersPanel from '@/components/search-and-filters-panel'
import SearchBar from '@/components/search-bar'
import ErrorMessage from '@/components/error-message'
import BidList from '@/components/bids/bid-list'
import AuthorDetails from '@/components/authors/author-details'
import { getAuthor, getBids } from '@/data/index'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import { AuthorDetailsProps } from '@/types/authors'
import { BIDS_PER_PAGE } from '@/constants/items'
import { BidListProps } from '@/types/bids'
import { QueryProps } from '@/types/query'

type Props = {
  authorDetails: AuthorDetailsProps['author']
  bids: BidListProps
  page: number | string
  pagesQuantity: number | string
}

const AuthorPage = ({ authorDetails, bids, page, pagesQuantity }: Props) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return 'Loading...'
  }

  if (!authorDetails || !bids) {
    return <ErrorMessage />
  }

  return (
    <>
      <AuthorDetails authorDetails={authorDetails} />
      <Container
        as={VStack}
        py={V_SPACING_BETWEEN_PAGE_SECTIONS}
        spacing={V_SPACING_BETWEEN_PAGE_SECTIONS}
      >
        <SearchAndFiltersPanel>
          <SearchBar isFullWidth isLocal />
        </SearchAndFiltersPanel>
        <BidList
          w="full"
          items={bids.edges}
          pageInfo={bids.pageInfo}
          activePage={page}
          pagesQuantity={pagesQuantity}
        />
      </Container>
    </>
  )
}

export const getServerSideProps = async ({
  query: { page = 1, slug = '', search = '', orderBy },
}: QueryProps) => {
  const authorDetails = await getAuthor(slug as string)
  const limit = BIDS_PER_PAGE
  const skip = (Number(page) - 1) * limit
  const bids = (await getBids(limit, skip, slug, search, orderBy)) ?? []
  const { count: bidsQuantity } = bids?.aggregate ?? 0
  const pagesQuantity = Math.ceil(bidsQuantity / limit) ?? 0
  return {
    props: {
      bids,
      page,
      pagesQuantity,
      authorDetails,
      fallback: true,
    },
  }
}

export default AuthorPage
