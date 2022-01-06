import { FC, ComponentProps } from 'react'
import { SimpleGrid, HStack, Button } from '@chakra-ui/react'
import BidItem from './bid-item'
import usePushToQueries from '@/hooks/usePushToQueries'
import { BidListProps } from '@/types/bids'
import EmptyData from '@/components/empty-data'

type Props = ComponentProps<typeof SimpleGrid> & {
  items: BidListProps['edges']
  pageInfo?: BidListProps['pageInfo']
  activePage?: string | number
  pagesQuantity?: string | number
}

const BidList: FC<Props> = ({
  items,
  pageInfo,
  activePage = 1,
  pagesQuantity,
  ...props
}) => {
  const { hasPreviousPage, hasNextPage } = pageInfo ?? {}
  const hasPagination = hasPreviousPage || hasNextPage
  const { setQueryParam } = usePushToQueries()

  const increasePage = () => {
    if (hasNextPage && activePage >= 1)
      setQueryParam({ page: Number(activePage) + 1 })
  }

  const decreasePage = () => {
    if (activePage == 2) setQueryParam({ page: null })
    if (hasPreviousPage && activePage > 2)
      setQueryParam({ page: Number(activePage) - 1 })
  }

  const setPage = (val: any) => {
    setQueryParam({ page: val })
  }

  const PaginationButton = ({ ...props }) => (
    <Button
      variant={'ghost'}
      colorScheme="pink"
      borderRadius="50%"
      size="sm"
      {...props}
    ></Button>
  )

  return !!items.length ? (
    <>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} {...props}>
        {items.map(({ node }) => (
          <BidItem key={node.id} item={node} />
        ))}
      </SimpleGrid>
      {hasPagination && (
        <HStack justify="center" w="full" spacing={2}>
          <PaginationButton
            onClick={() => decreasePage()}
            disabled={!hasPreviousPage}
          >
            {'<'}
          </PaginationButton>
          {[...new Array(pagesQuantity)].map((_, i) => (
            <PaginationButton
              key={i}
              variant={Number(activePage) === i + 1 ? 'primary' : 'ghost'}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </PaginationButton>
          ))}

          <PaginationButton
            onClick={() => increasePage()}
            disabled={!hasNextPage}
          >
            {'>'}
          </PaginationButton>
        </HStack>
      )}
    </>
  ) : (
    <EmptyData />
  )
}
export default BidList
