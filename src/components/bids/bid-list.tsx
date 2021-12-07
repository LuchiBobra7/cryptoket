//import {ComponentProps} from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import BidItem from './bid-item'
import { BidListProps } from '@/types/bids'

type Props = {
  items: BidListProps['edges']
  [x: string]: any
}

const BidList = ({ items, ...props }: Props) => (
  <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={6} {...props}>
    {items.map(({ node }) => (
      <BidItem key={node.id} item={node} />
    ))}
  </SimpleGrid>
)

export default BidList
