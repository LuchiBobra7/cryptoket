import { FC } from 'react'
import { VStack, Box, Container } from '@chakra-ui/react'
import Header from './header'
import Footer from './footer'

const Layout: FC = ({ children }) => {
  return (
    <VStack
      flex={1}
      spacing={0}
      alignItems="stretch"
      w="full"
      minH={{ base: 'auto', md: '100vh' }}
    >
      <Header />

      <Box as="main" flex={1} w="full">
        {children}
      </Box>
      <Footer />
    </VStack>
  )
}

export default Layout
