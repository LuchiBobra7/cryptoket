import { Grid } from '@chakra-ui/react'
import AuthorItem from './author-item'
import { AuthorListProps } from '@/types/authors'

type Props = {
  items: AuthorListProps['edges']
}

const AuthorList = ({ items }: Props) => {
  return (
    <Grid
      templateColumns="repeat(5, minmax(160px, 1fr))"
      gap={7}
      overflowX="auto"
      mr={{ base: -6, lg: 0 }}
      pb={4}
    >
      {items?.map(({ node }, i) => (
        <AuthorItem key={node.id} i={i} item={node} />
      ))}
    </Grid>
  )
}

export default AuthorList
