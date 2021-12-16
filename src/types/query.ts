export type Query = {
  search?: string
  orderBy?: string
  page?: string
  slug?: string
}

export type QueryProps = {
  query: Query
}
