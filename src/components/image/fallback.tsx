import { Box, Icon } from '@chakra-ui/react'
import { MdOutlineBrokenImage } from 'react-icons/md'

const ImageFallback = ({ ...props }) => {
  return (
    <Box bg="gray.100" {...props}>
      <Icon as={MdOutlineBrokenImage} fontSize="6xl" color="gray.300" />
    </Box>
  )
}

export default ImageFallback
