import { request } from 'graphql-request'
import { SERVER_API_ENDPOINT } from 'config/env'
import { GetAuthorsDocument, GetAuthorsQuery } from '@/queries/getAuthors'
import { GetAuthorDocument, GetAuthorQuery } from '@/queries//getAuthor'
import { GetBidsDocument, GetBidsQuery } from '@/queries/getBids'
import { GetBidDocument, GetBidQuery } from '@/queries/getBid'

export const getAuthors = async (limit: number) => {
  const result = await request<GetAuthorsQuery>(
    SERVER_API_ENDPOINT,
    GetAuthorsDocument,
    { limit }
  )

  const authors = result.authorsConnection || {}

  return authors
}

export const getAuthor = async (slug: string) => {
  const result = await request<GetAuthorQuery>(
    SERVER_API_ENDPOINT,
    GetAuthorDocument,
    {
      slug,
    }
  )

  return result.author
}

export const getBids = async (limit: number, skip: number, slug: string) => {
  const result = await request<GetBidsQuery>(
    SERVER_API_ENDPOINT,
    GetBidsDocument,
    { limit, skip, slug }
  )

  const { edges, pageInfo } = result.bidsConnection || {}

  return { edges, pageInfo }
}

export const getBid = async (slug: string) => {
  const result = await request<GetBidQuery>(
    SERVER_API_ENDPOINT,
    GetBidDocument,
    { slug }
  )

  const { bid } = result || {}

  return bid
}
