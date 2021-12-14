import { VStack, Container, List, ListItem, Box } from '@chakra-ui/react'
import { HEADER_HEIGHT } from '@/constants/layout'
import HeaderButtons from '@/components/layout/header/buttons'
import navItems from './nav-data'
import NavLink from './nav-link'

const NavMenu = () => {
  return (
    <VStack
      flex={1}
      alignItems="flex-start"
      position="absolute"
      top={HEADER_HEIGHT}
      left={0}
      right={0}
      //height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      background="white"
    >
      <List flex={1} spacing={5} as="nav" py={10}>
        {navItems.map((item, i) => (
          <ListItem key={i}>
            <NavLink as={Container} item={item} fontWeight="600" />
          </ListItem>
        ))}
      </List>
      <Box as="footer" w="full" py={4} borderTopWidth={2}>
        <Container display="flex" justifyContent="center">
          {' '}
          <HeaderButtons />
        </Container>
      </Box>
    </VStack>
  )
}

export default NavMenu
