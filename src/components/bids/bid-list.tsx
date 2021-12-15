import { SimpleGrid } from '@chakra-ui/react'
import BidItem from './bid-item'
import { BidListProps } from '@/types/bids'
import EmptyData from '@/components/empty-data'

type Props = {
  items: BidListProps['edges']
  [x: string]: any
}

const BidList = ({ items, ...props }: Props) =>
  !!items.length ? (
    <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={6} {...props}>
      {items.map(({ node }) => (
        <BidItem key={node.id} item={node} />
      ))}
    </SimpleGrid>
  ) : (
    <EmptyData />
  )

export default BidList
