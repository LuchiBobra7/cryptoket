import NextNProgress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'src/theme'
import Layout from 'src/components/layout'
import { UserProvider } from '@/context/index'
import './index.css'

console.log(theme.components)
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <NextNProgress color="rgba(216, 85, 173)" height={2} />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
