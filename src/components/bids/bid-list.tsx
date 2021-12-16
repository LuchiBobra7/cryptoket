import { FC, ComponentProps } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import BidItem from './bid-item'
import { BidListProps } from '@/types/bids'
import EmptyData from '@/components/empty-data'

type Props = ComponentProps<typeof SimpleGrid> & {
  items: BidListProps['edges']
}

const BidList: FC<Props> = ({ items, ...props }) =>
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
