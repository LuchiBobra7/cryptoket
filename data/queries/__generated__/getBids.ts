import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
import { BidFragmentDoc } from './bidFragment';
export type GetBidsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']>;
  slug?: Types.InputMaybe<Types.Scalars['String']>;
  search?: Types.InputMaybe<Types.Scalars['String']>;
  orderBy?: Types.InputMaybe<Types.BidOrderByInput>;
  bidImageSize?: Types.InputMaybe<Types.Scalars['Int']>;
  bidImageSizeXs?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetBidsQuery = { __typename?: 'Query', bidsConnection: { __typename?: 'BidConnection', edges: Array<{ __typename?: 'BidEdge', node: { __typename?: 'Bid', slug?: string | null | undefined, id: string, price?: number | null | undefined, title?: string | null | undefined, description?: string | null | undefined, image?: { __typename?: 'Asset', url: string, xs: string, thumbnail: string, blurDataURL: string } | null | undefined } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, pageSize?: number | null | undefined }, aggregate: { __typename?: 'Aggregate', count: number } } };


export const GetBidsDocument = gql`
    query getBids($limit: Int = 12, $skip: Int = 0, $slug: String = "", $search: String = "", $orderBy: BidOrderByInput, $bidImageSize: Int = 202, $bidImageSizeXs: Int = 32) {
  bidsConnection(
    orderBy: $orderBy
    first: $limit
    skip: $skip
    where: {author: {slug_contains: $slug}, title_contains: $search}
  ) {
    edges {
      node {
        ...bid
        slug
      }
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      pageSize
    }
    aggregate {
      count
    }
  }
}
    ${BidFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const GetBidsDocumentString = print(GetBidsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBids(variables?: GetBidsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetBidsQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetBidsQuery>(GetBidsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBids');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;