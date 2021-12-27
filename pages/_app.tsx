import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'src/theme'
import Layout from 'src/components/layout'
import './index.css'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  const [isRouteChanging, setIsRouteChanging] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsRouteChanging(true)
    }

    const handleRouteChangeEnd = () => {
      setIsRouteChanging(false)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout isRouteChanging={isRouteChanging}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
