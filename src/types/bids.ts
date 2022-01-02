import { GetBidsQuery } from 'data/queries/__generated__/getBids'
import { GetBidQuery } from 'data/queries/__generated__/getBid'

export type BidListProps = GetBidsQuery['bidsConnection']

export type BidDetailsProps = {
  bid: GetBidQuery['bid']
}
