import { GetBidsQuery } from 'data/queries/__generated__/getBids'
import { GetBidQuery } from 'data/queries/__generated__/getBid'

export type BidListProps = {
  edges: GetBidsQuery['bidsConnection']['edges']
  pageInfo: GetBidsQuery['bidsConnection']['pageInfo']
}

export type BidDetailsProps = {
  bid: GetBidQuery['bid']
}
