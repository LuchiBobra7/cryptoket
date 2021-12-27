import { Box, Heading } from '@chakra-ui/react'

const Banner = () => {
  const circleStyles = {
    content: '""',
    position: 'absolute',
    width: '40vmin',
    height: '40vmin',
    borderRadius: '50%',
    background: 'whiteAlpha.400',
  }
  return (
    <Box
      bg="redLinear"
      py={{ base: 14, lg: 24 }}
      px={12}
      w="full"
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
        fontSize={{ base: '2xl', md: '4xl', lg: '4xl', xl: '5xl' }}
        fontWeight="800"
        color="white"
      >
        Discover, collect, and sell extraordinary NFTs
      </Heading>
    </Box>
  )
}

export default Banner
