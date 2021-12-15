import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { removeEmptyParams, slugify } from '@/utils/index'
import { ROUTES } from '@/constants/routes'

const SearchBar = ({ ...props }) => {
  const { asPath, push, query } = useRouter()

  const iconColor = useColorModeValue('gray.2', 'white')

  const [searchValue, setSearchValue] = useState<string | null>('')

  useEffect(() => {
    setSearchValue((query.search as string) ?? '')
  }, [query.search])

  return (
    <HStack
      as="form"
      onSubmit={() => {
        push({
          pathname: asPath.includes(ROUTES.AUTHOR)
            ? `${ROUTES.AUTHOR}/${query.slug}`
            : ROUTES.BIDS,
          query: removeEmptyParams({
            search: slugify(searchValue as string),
            orderBy: query.orderBy as string,
          }),
        })
      }}
      width="full"
      {...props}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          fontSize="2xl"
          color={iconColor}
          children={<Icon as={RiSearchLine} />}
        />
        <Input
          variant="outline"
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search bids by title"
          defaultValue={searchValue as string}
        />
      </InputGroup>
    </HStack>
  )
}

export default SearchBar
