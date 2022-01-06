import { request } from 'graphql-request'
import { SERVER_API_ENDPOINT } from '@/config/env'
import { GetAuthorsDocument, GetAuthorsQuery } from '@/queries/getAuthors'
import { GetAuthorDocument, GetAuthorQuery } from '@/queries/getAuthor'
import { GetBidsDocument, GetBidsQuery } from '@/queries/getBids'
import { GetBidDocument, GetBidQuery } from '@/queries/getBid'
import { CreateBidDocument, CreateBidMutation } from '@/queries/createBid'
import { BIDS_PER_PAGE, AUTHORS_PER_PAGE } from '@/constants/items'

export const getAuthors = async (limit: number = AUTHORS_PER_PAGE) => {
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

export const getBids = async (
  limit: number = BIDS_PER_PAGE,
  skip: number = 0,
  slug: string = '',
  search: string = '',
  orderBy: string = 'createdAt_DESC'
) => {
  const result = await request<GetBidsQuery>(
    SERVER_API_ENDPOINT,
    GetBidsDocument,
    { limit, skip, slug, search, orderBy }
  )

  const { edges, pageInfo, aggregate } = result.bidsConnection ?? {}

  return { edges, pageInfo, aggregate }
}

export const getBid = async (slug: string) => {
  const result = await request<GetBidQuery>(
    SERVER_API_ENDPOINT,
    GetBidDocument,
    { slug }
  )

  const { bid } = result ?? {}

  return bid
}

export const uploadFile = async (formData: any) => {
  const result = await fetch(`${SERVER_API_ENDPOINT}/upload`, {
    method: 'POST',
    body: formData,
  })
  return result.json()
}

export const createBid = async (
  title: string,
  description: string,
  price: number,
  imageId: string
) => {
  const result = await request<CreateBidMutation>(
    SERVER_API_ENDPOINT,
    CreateBidDocument,
    {
      title,
      description,
      price,
      imageId,
    }
  )

  return result
}
