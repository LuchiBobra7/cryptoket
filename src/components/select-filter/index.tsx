import { useRouter } from 'next/router'
import { Select, Icon, useColorModeValue } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { ROUTES } from '@/constants/routes'
import { removeEmptyParams } from '@/utils/index'
import { selectItems } from './filter-data'

const SelectFilter = ({ ...props }) => {
  const { push, asPath, query } = useRouter()
  return (
    <Select
      value={query.orderBy}
      flex={1}
      maxW="sm"
      defaultValue={query.orderBy}
      onChange={(e) => {
        push({
          pathname: asPath.includes(ROUTES.AUTHOR)
            ? `${ROUTES.AUTHOR}/${query.slug}`
            : ROUTES.BIDS,
          query: removeEmptyParams({
            search: query.search,
            orderBy: e.target.value,
          }),
        })
      }}
      icon={<Icon as={BsChevronDown} w={38} h={38} />}
      {...props}
    >
      {selectItems.map((item, i) => (
        <option key={i} value={item.value}>
          {item.title}
        </option>
      ))}
    </Select>
  )
}

export default SelectFilter
