import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { removeEmptyParams, slugify } from '@/utils/index'
import { ROUTES } from '@/constants/routes'

const SearchBar = ({ ...props }) => {
  const { push, asPath, query } = useRouter()

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!query.search) {
      setSearchValue('')
    }
    setSearchValue(query.search as any)
  }, [query.search])

  return (
    <HStack
      as="form"
      width="full"
      onSubmit={(e) => {
        e.preventDefault()
        push({
          pathname: asPath.includes(ROUTES.AUTHOR)
            ? `${ROUTES.AUTHOR}/${query.slug}`
            : ROUTES.BIDS,
          query: removeEmptyParams({
            search: slugify(searchValue),
            orderBy: query.orderBy as string,
          }),
        })
      }}
      maxW="xl"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          fontSize="2xl"
          children={<Icon as={RiSearchLine} />}
        />
        <Input
          variant="outline"
          placeholder="Search bids"
          value={searchValue ?? ''}
          onChange={(e) => setSearchValue(e.target.value)}
          {...props}
        />
      </InputGroup>
    </HStack>
  )
}

export default SearchBar
