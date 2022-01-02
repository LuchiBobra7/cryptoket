import { FC } from 'react'
import { VStack, Box } from '@chakra-ui/react'
import Head from '@/components/layout/head'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const Layout: FC = ({ children }) => {
  return (
    <VStack
      flex={1}
      spacing={0}
      alignItems="stretch"
      w="full"
      minH={{ md: '100vh' }}
    >
      <Head />
      <Header />

      <Box as="main" flex={1} w="full">
        {children}
      </Box>
      <Footer />
    </VStack>
  )
}

export default Layout
