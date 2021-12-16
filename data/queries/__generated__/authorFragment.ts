import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type AuthorFragment = { __typename?: 'Author', id: string, name: string, isVerified?: boolean | null | undefined, image?: { __typename?: 'Asset', thumbnail: string, blurDataURL: string } | null | undefined };

export const AuthorFragmentDoc = gql`
    fragment author on Author {
  id
  name
  isVerified
  image {
    thumbnail: url(
      transformation: {image: {resize: {width: $authorImageSize, height: $authorImageSize, fit: crop}}, document: {output: {format: webp}}}
    )
    blurDataURL: url(
      transformation: {image: {resize: {width: 10, height: 10, fit: crop}}, document: {output: {format: webp}}}
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