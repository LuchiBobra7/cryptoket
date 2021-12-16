export type Query = {
  search?: any
  orderBy?: string
  page?: string | number
  slug?: string
}

export type QueryProps = {
  query: Query
}
