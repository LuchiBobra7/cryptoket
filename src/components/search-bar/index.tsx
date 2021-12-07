import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

const SearchBar = ({ ...props }) => {
  const iconColor = useColorModeValue('gray.2', 'white')
  return (
    <HStack width="full" {...props}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          fontSize="2xl"
          color={iconColor}
          children={<Icon as={RiSearchLine} />}
        />
        <Input variant="outline" placeholder="Search for sounds, tracks" />
      </InputGroup>
    </HStack>
  )
}

export default SearchBar
