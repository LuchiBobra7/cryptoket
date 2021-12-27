import { PropsWithChildren } from 'react'
import { VStack, Box } from '@chakra-ui/react'
import Head from '@/components/layout/head'
import Loader from '@/components/loader'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

type Props = PropsWithChildren<{
  isRouteChanging: boolean
}>

const Layout = ({ children, isRouteChanging }: Props) => {
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
      <Loader isRouteChanging={isRouteChanging} />
      <Box as="main" flex={1} w="full">
        {children}
      </Box>
      <Footer />
    </VStack>
  )
}

export default Layout
