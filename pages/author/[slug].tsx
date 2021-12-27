import { useRouter } from 'next/router'
import { Container, Box, VStack, Text, Avatar, Heading } from '@chakra-ui/react'
import SearchAndFiltersPanel from '@/components/search-and-filters-panel'
import SearchBar from '@/components/search-bar'
import Image from '@/components/image'
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
}

const AuthorPage = ({ authorDetails, bids }: Props) => {
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
        <BidList w="full" items={bids.edges} />
      </Container>
    </>
  )
}

export const getServerSideProps = async ({
  query: { search, orderBy, slug },
}: QueryProps) => {
  const authorDetails = await getAuthor(slug as string)
  const bids = (await getBids(BIDS_PER_PAGE, 0, slug, search, orderBy)) ?? []
  return {
    props: {
      bids,
      authorDetails,
      fallback: true,
    },
  }
}

export default AuthorPage
