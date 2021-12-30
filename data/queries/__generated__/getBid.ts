import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
import { BidFragmentDoc } from './bidFragment';
import { AuthorFragmentDoc } from './authorFragment';
export type GetBidQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']>;
  authorImageSize?: Types.InputMaybe<Types.Scalars['Int']>;
  bidImageSize?: Types.InputMaybe<Types.Scalars['Int']>;
  bidImageSizeXs?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetBidQuery = { __typename?: 'Query', bid?: { __typename?: 'Bid', id: string, price?: number | null | undefined, title?: string | null | undefined, description?: string | null | undefined, author?: { __typename?: 'Author', id: string, name: string, isVerified?: boolean | null | undefined, image?: { __typename?: 'Asset', thumbnail: string, blurDataURL: string } | null | undefined } | null | undefined, image?: { __typename?: 'Asset', url: string, xs: string, thumbnail: string, blurDataURL: string } | null | undefined } | null | undefined };


export const GetBidDocument = gql`
    query getBid($slug: String, $authorImageSize: Int = 64, $bidImageSize: Int = 440, $bidImageSizeXs: Int = 32) {
  bid(where: {slug: $slug}) {
    ...bid
    author {
      ...author
    }
  }
}
    ${BidFragmentDoc}
${AuthorFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const GetBidDocumentString = print(GetBidDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBid(variables?: GetBidQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetBidQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetBidQuery>(GetBidDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBid');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;