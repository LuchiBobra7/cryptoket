import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
import { BidFragmentDoc } from './bidFragment';
import { AuthorFragmentDoc } from './authorFragment';
export type GetBidsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']>;
  slug?: Types.InputMaybe<Types.Scalars['String']>;
  search?: Types.InputMaybe<Types.Scalars['String']>;
  orderBy?: Types.InputMaybe<Types.BidOrderByInput>;
  bidImageSize?: Types.InputMaybe<Types.Scalars['Int']>;
  authorImageSize?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetBidsQuery = { __typename?: 'Query', bidsConnection: { __typename?: 'BidConnection', edges: Array<{ __typename?: 'BidEdge', node: { __typename?: 'Bid', slug?: string | null | undefined, id: string, price?: number | null | undefined, title?: string | null | undefined, description?: string | null | undefined, author?: { __typename?: 'Author', name: string, id: string, isVerified?: boolean | null | undefined, bgImage?: { __typename?: 'Asset', url: string, thumbnail: string, blurDataURL: string } | null | undefined, image?: { __typename?: 'Asset', thumbnail: string, blurDataURL: string } | null | undefined } | null | undefined, image?: { __typename?: 'Asset', url: string, thumbnail: string, blurDataURL: string } | null | undefined } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };


export const GetBidsDocument = gql`
    query getBids($limit: Int, $skip: Int, $slug: String, $search: String, $orderBy: BidOrderByInput, $bidImageSize: Int = 202, $authorImageSize: Int = 80) {
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
        author {
          ...author
          bgImage {
            thumbnail: url(
              transformation: {image: {resize: {width: 1433, height: 308, fit: crop}}, document: {output: {format: webp}}}
            )
            blurDataURL: url(
              transformation: {image: {resize: {width: 40, height: 20, fit: crop}}, document: {output: {format: webp}}}
            )
            url
          }
          name
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    ${BidFragmentDoc}
${AuthorFragmentDoc}`;

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