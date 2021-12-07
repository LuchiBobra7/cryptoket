import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type AuthorFragment = { __typename?: 'Author', id: string, name: string, image?: { __typename?: 'Asset', thumbnail: string } | null | undefined };

export const AuthorFragmentDoc = gql`
    fragment author on Author {
  id
  name
  image {
    thumbnail: url(
      transformation: {image: {resize: {width: 64, height: 64, fit: crop}}, document: {output: {format: webp}}}
    )
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;