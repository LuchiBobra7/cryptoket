import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type CreateBidMutationVariables = Types.Exact<{
  title?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
  price?: Types.InputMaybe<Types.Scalars['Float']>;
  imageId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type CreateBidMutation = { __typename?: 'Mutation', createBid?: { __typename?: 'Bid', title?: string | null | undefined, description?: string | null | undefined, price?: number | null | undefined } | null | undefined };


export const CreateBidDocument = gql`
    mutation createBid($title: String, $description: String, $price: Float, $imageId: ID) {
  createBid(
    data: {title: $title, description: $description, price: $price, image: {connect: {id: $imageId}}}
  ) {
    title
    description
    price
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const CreateBidDocumentString = print(CreateBidDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createBid(variables?: CreateBidMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: CreateBidMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateBidMutation>(CreateBidDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createBid');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;