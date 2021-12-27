import { FC, ComponentProps, KeyboardEvent, SyntheticEvent } from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import {
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuGroup,
  MenuItem,
  Avatar,
  useOutsideClick,
  Text,
} from '@chakra-ui/react'
import { RiSearchLine, RiCloseFill } from 'react-icons/ri'
import { removeEmptyParams, slugify } from '@/utils/index'
import { ROUTES } from '@/constants/routes'
import { KEYS } from '@/constants/keys'
import Link from '@/components/link'
import { GetBidsDocument, GetBidsQuery } from '@/queries/getBids'
import { SERVER_API_ENDPOINT } from 'config/env'

type Props = ComponentProps<typeof Input> & {
  isLocal?: boolean
  isFullWidth?: boolean
}

const SearchBar: FC<Props> = ({ isLocal, isFullWidth, ...props }) => {
  const internalRef = useRef<HTMLDivElement>(null)

  const { push, asPath, query } = useRouter()

  const [searchValue, setSearchValue] = useState<string>('')

  const slug = isLocal ? query.slug : ''
  const { data } = useSWR<GetBidsQuery>(
    [GetBidsDocument, slug, searchValue],
    (query, slug, search) =>
      request(SERVER_API_ENDPOINT, query, { slug, search })
  )
  const searchResultsList = data?.bidsConnection?.edges

  const [isOpenMenu, setIsOpenMenu] = useState(!!searchValue?.length)

  useOutsideClick({
    ref: internalRef,
    handler: () => {
      setIsOpenMenu(false)
      setSearchValue('')
    },
  })

  useEffect(() => {
    if (isLocal || asPath === ROUTES.BIDS) {
      setSearchValue(query.search as string)
    }
    if (!query.search) {
      setSearchValue('')
    }
  }, [query.search, asPath])

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setSearchValue(value)
    if (value.length > 0) setIsOpenMenu(true)
    else setIsOpenMenu(false)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === KEYS.ENTER) {
      push({
        pathname: isLocal ? `${ROUTES.AUTHOR}/${query.slug}` : ROUTES.BIDS,
        query: removeEmptyParams({
          search: slugify(searchValue),
          orderBy: query.orderBy as string,
        }),
      })
      setIsOpenMenu(false)
    }
  }

  const handleClose = () => {
    setSearchValue('')
    setIsOpenMenu(false)
  }

  return (
    <HStack width="full" maxW={!isFullWidth ? 'xl' : 'full'} ref={internalRef}>
      <Menu matchWidth isLazy isOpen={isOpenMenu} offset={[0, 4]}>
        <MenuButton as={Box} w="full" onClick={(e) => e.preventDefault()}>
          <InputGroup pointerEvents="visible">
            <InputLeftElement
              fontSize="2xl"
              children={<Icon as={RiSearchLine} />}
            />
            <Input
              variant="outline"
              placeholder="Search bids"
              value={searchValue}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => handleKeyDown(e)}
              {...props}
            />
            {!!searchValue?.length && (
              <InputRightElement
                fontSize="2xl"
                cursor="pointer"
                children={<Icon as={RiCloseFill} />}
                onClick={() => handleClose()}
              />
            )}
          </InputGroup>
        </MenuButton>

        <Portal>
          <MenuList zIndex={2} position="relative" py={0} boxShadow="lg">
            {!searchResultsList && <MenuItem>Loading...</MenuItem>}
            {!!searchResultsList && !searchResultsList?.length ? (
              <MenuItem>No results</MenuItem>
            ) : (
              <MenuGroup
                title={`${isLocal ? 'Author' : 'All'} bids`}
                color="black.1"
              >
                {searchResultsList?.map(({ node }) => (
                  <MenuItem
                    key={node.id}
                    as={Link}
                    href={`${ROUTES.BID}/${node.slug}`}
                    borderTopWidth={1}
                  >
                    <Avatar
                      name="Dan Abrahmov"
                      size="sm"
                      src={node.image?.thumbnail}
                      mr={4}
                    />
                    <Text fontWeight="600">{node.title}</Text>
                  </MenuItem>
                ))}
                <MenuItem
                  borderTopWidth={1}
                  _hover={{ bg: 'transparent', cursor: 'default' }}
                >
                  <Text fontWeight="500">Press Enter to see all results</Text>
                </MenuItem>
              </MenuGroup>
            )}
          </MenuList>
        </Portal>
      </Menu>
    </HStack>
  )
}

export default SearchBar
