import { useRouter } from 'next/router'
import { Select, Icon, useColorModeValue } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { ROUTES } from '@/constants/routes'
import { removeEmptyParams } from '@/utils/index'
import { selectItems } from './filter-data'

const SelectFilter = () => {
  const iconColor = useColorModeValue('gray.2', 'white')
  const { push, asPath, query } = useRouter()
  return (
    <Select
      value={query?.orderBy}
      flex={1}
      color={iconColor}
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
    >
      {selectItems.map((item, i) => (
        <option
          key={i}
          value={item.value}
          selected={query.orderBy === item.value || i === 0}
        >
          {item.title}
        </option>
      ))}
    </Select>
  )
}

export default SelectFilter
