import { FC, ComponentProps } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import BidItem from './bid-item'
import { BidListProps } from '@/types/bids'
import EmptyData from '@/components/empty-data'
import Pagination from '@/components/pagination'

type Props = ComponentProps<typeof SimpleGrid> & {
  items: BidListProps['edges']
  pageInfo?: BidListProps['pageInfo']
  activePage?: number
  pagesQuantity?: number
}

const BidList: FC<Props> = ({
  items,
  pageInfo,
  activePage = 1,
  pagesQuantity,
  ...props
}) => {
  return !!items.length ? (
    <>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} {...props}>
        {items.map(({ node }) => (
          <BidItem key={node.id} item={node} />
        ))}
      </SimpleGrid>
      <Pagination
        pageInfo={pageInfo as BidListProps['pageInfo']}
        activePage={activePage}
        pagesQuantity={pagesQuantity as number}
      />
    </>
  ) : (
    <EmptyData />
  )
}

export default BidList
