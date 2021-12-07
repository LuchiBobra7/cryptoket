import { GetAuthorsQuery } from 'data/queries/__generated__/getAuthors'

import { GetAuthorQuery } from 'data/queries/__generated__/getAuthor'

export type AuthorListProps = {
  edges: GetAuthorsQuery['authorsConnection']['edges']
}

export type AuthorDetailsProps = {
  author: GetAuthorQuery['author']
}
