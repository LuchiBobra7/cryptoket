import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type GetBidsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']>;
  slug?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetBidsQuery = { __typename?: 'Query', bidsConnection: { __typename?: 'BidConnection', edges: Array<{ __typename?: 'BidEdge', node: { __typename?: 'Bid', id: string, price?: number | null | undefined, title?: string | null | undefined, slug?: string | null | undefined, image?: { __typename?: 'Asset', url: string, thumbnail: string, blurDataURL: string } | null | undefined } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };


export const GetBidsDocument = gql`
    query getBids($limit: Int, $skip: Int, $slug: String) {
  bidsConnection(
    orderBy: createdAt_DESC
    first: $limit
    skip: $skip
    where: {author: {slug_contains: $slug}}
  ) {
    edges {
      node {
        id
        price
        title
        slug
        image {
          url
          thumbnail: url(
            transformation: {image: {resize: {width: 202, height: 224, fit: crop}}, document: {output: {format: webp}}}
          )
          blurDataURL: url(
            transformation: {image: {resize: {width: 10, height: 10, fit: crop}}, document: {output: {format: webp}}}
          )
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `;

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