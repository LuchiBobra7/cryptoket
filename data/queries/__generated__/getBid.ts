import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
import { AuthorFragmentDoc } from './authorFragment';
export type GetBidQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetBidQuery = { __typename?: 'Query', bid?: { __typename?: 'Bid', id: string, price?: number | null | undefined, title?: string | null | undefined, image?: { __typename?: 'Asset', url: string, thumbnail: string, blurDataURL: string } | null | undefined, author?: { __typename?: 'Author', id: string, name: string, image?: { __typename?: 'Asset', thumbnail: string } | null | undefined } | null | undefined } | null | undefined };


export const GetBidDocument = gql`
    query getBid($slug: String) {
  bid(where: {slug: $slug}) {
    id
    price
    title
    image {
      url
      thumbnail: url(
        transformation: {image: {resize: {width: 440, height: 440, fit: crop}}, document: {output: {format: webp}}}
      )
      blurDataURL: url(
        transformation: {image: {resize: {width: 10, height: 10, fit: crop}}, document: {output: {format: webp}}}
      )
    }
    author {
      ...author
    }
  }
}
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