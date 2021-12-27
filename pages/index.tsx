import { useRouter } from 'next/router'
import { Box, Button } from '@chakra-ui/react'
import { ROUTES } from '@/constants/routes'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import InnerPageContainer from '@/components/layout/inner-page-container'
import Link from '@/components/link'
import Banner from '@/components/banner'
import SectionTitle from '@/components/section-title'
import AuthorList from '@/components/authors/author-list'
import BidList from '@/components/bids/bid-list'
import ErrorMessage from '@/components/error-message'
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

  if (!authors && !bids) {
    return <ErrorMessage />
  }

  return (
    <InnerPageContainer>
      <Banner />
      <Box as="section" w="full">
        <SectionTitle title="Top Sellers" />
        <AuthorList items={authors.edges} />
      </Box>
      <Box as="section" w="full">
        <SectionTitle title="Hot Bids" />
        <BidList items={bids.edges} />
        <Button
          href={ROUTES.BIDS}
          as={Link}
          colorScheme="pink"
          variant="outline"
          display="flex"
          w={240}
          mt={V_SPACING_BETWEEN_PAGE_SECTIONS}
          mx="auto"
        >
          View More
        </Button>
      </Box>
    </InnerPageContainer>
  )
}

export const getServerSideProps = async () => {
  const authors = (await getAuthors()) ?? []
  const bids = (await getBids()) ?? []
  return {
    props: {
      authors,
      bids,
      fallback: true,
    },
  }
}

export default HomePage
