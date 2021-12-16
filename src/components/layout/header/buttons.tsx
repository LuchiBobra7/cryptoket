import { HStack, Button } from '@chakra-ui/react'
import Link from '@/components/link'
import { ROUTES } from '@/constants/routes'

const HeaderButtons = () => {
  return (
    <HStack spacing={3}>
      <Button href={ROUTES.CREATE_BID} as={Link} variant="primary" rounded="xl">
        Create
      </Button>
      <Button variant="outline" colorScheme="pink" rounded="xl">
        Connect
      </Button>
    </HStack>
  )
}

export default HeaderButtons
