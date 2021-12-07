import { Box, Heading } from '@chakra-ui/react'

const Banner = () => {
  const circleStyles = {
    content: '""',
    position: 'absolute',
    width: '36%',
    height: '115%',
    borderRadius: '50%',
    background: 'whiteAlpha.400',
  }
  return (
    <Box
      bg="redLinear"
      py={24}
      px={12}
      borderRadius="3xl"
      position="relative"
      overflow="hidden"
      _before={{
        ...circleStyles,
        left: '-18%',
        top: '-58%',
      }}
      _after={{
        ...circleStyles,
        right: '-6%',
        bottom: '-50%',
      }}
    >
      <Heading
        fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
        fontWeight="800"
        color="white"
      >
        Discover, collect, and sell extraordinary NFTs
      </Heading>
    </Box>
  )
}

export default Banner
