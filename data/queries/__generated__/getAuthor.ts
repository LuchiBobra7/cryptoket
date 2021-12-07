import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type GetAuthorQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetAuthorQuery = { __typename?: 'Query', author?: { __typename?: 'Author', id: string, name: string, image?: { __typename?: 'Asset', url: string, thumbnail: string, blurDataURL: string } | null | undefined } | null | undefined };


export const GetAuthorDocument = gql`
    query getAuthor($slug: String) {
  author(where: {slug: $slug}) {
    id
    image {
      thumbnail: url(
        transformation: {image: {resize: {width: 220, height: 220, fit: crop}}, document: {output: {format: webp}}}
      )
      blurDataURL: url(
        transformation: {image: {resize: {width: 10, height: 10, fit: crop}}, document: {output: {format: webp}}}
      )
      url
    }
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const GetAuthorDocumentString = print(GetAuthorDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAuthor(variables?: GetAuthorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAuthorQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAuthorQuery>(GetAuthorDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAuthor');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;