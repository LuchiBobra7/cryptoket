import { useBreakpointValue } from '@chakra-ui/react'

const useBreakpoint = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true })

  return { isLargeScreen }
}

export default useBreakpoint
