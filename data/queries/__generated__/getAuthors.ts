import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
import { AuthorFragmentDoc } from './authorFragment';
export type GetAuthorsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  authorImageSize?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetAuthorsQuery = { __typename?: 'Query', authorsConnection: { __typename?: 'AuthorConnection', edges: Array<{ __typename?: 'AuthorEdge', node: { __typename?: 'Author', isVerified?: boolean | null | undefined, income?: number | null | undefined, slug: string, id: string, name: string, image?: { __typename?: 'Asset', thumbnail: string, blurDataURL: string } | null | undefined } }> } };


export const GetAuthorsDocument = gql`
    query getAuthors($limit: Int, $authorImageSize: Int = 80) {
  authorsConnection(orderBy: income_DESC, first: $limit) {
    edges {
      node {
        ...author
        isVerified
        income
        slug
      }
    }
  }
}
    ${AuthorFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const GetAuthorsDocumentString = print(GetAuthorsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAuthors(variables?: GetAuthorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: GetAuthorsQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAuthorsQuery>(GetAuthorsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAuthors');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;