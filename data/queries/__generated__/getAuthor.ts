import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
import { AuthorFragmentDoc } from './authorFragment';
export type GetAuthorQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']>;
  authorImageSize?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetAuthorQuery = { __typename?: 'Query', author?: { __typename?: 'Author', id: string, name: string, isVerified?: boolean | null | undefined, bgImage?: { __typename?: 'Asset', thumbnail: string, blurDataURL: string } | null | undefined, image?: { __typename?: 'Asset', thumbnail: string, blurDataURL: string } | null | undefined } | null | undefined };


export const GetAuthorDocument = gql`
    query getAuthor($slug: String, $authorImageSize: Int = 220) {
  author(where: {slug: $slug}) {
    ...author
    bgImage {
      thumbnail: url(
        transformation: {image: {resize: {width: 1433, height: 308, fit: crop}}, document: {output: {format: webp}}}
      )
      blurDataURL: url(
        transformation: {image: {resize: {width: 40, height: 20, fit: crop}}, document: {output: {format: webp}}}
      )
    }
  }
}
    ${AuthorFragmentDoc}`;

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