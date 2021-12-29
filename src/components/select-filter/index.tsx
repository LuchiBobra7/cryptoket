import { useRouter } from 'next/router'
import {
  Box,
  Select,
  Icon,
  Menu,
  MenuButton,
  MenuOptionGroup,
  Portal,
  MenuList,
  MenuItemOption,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePushToQueries from '@/hooks/usePushToQueries'
import { selectItems } from './filter-data'

const SelectFilter = ({ ...props }) => {
  const { query } = useRouter()
  const selectedItem = selectItems.find((item) => query.orderBy === item.value)
  const { setQueryParam } = usePushToQueries()
  return (
    <Box flexBasis="230px" position="relative">
      <Menu matchWidth>
        {({ isOpen }) => (
          <>
            <Select
              as={MenuButton}
              textAlign="left"
              icon={
                <Icon
                  as={BsChevronDown}
                  w={38}
                  h={38}
                  transition="all 0.2s ease-in"
                  transform={isOpen ? 'scaleY(-1)' : 'scaleY(1)'}
                />
              }
              {...props}
            >
              {selectedItem?.label || selectItems[0].label}
            </Select>
            <Portal>
              <MenuList>
                <MenuOptionGroup
                  value={query.orderBy || selectItems[0].value}
                  type="radio"
                  onChange={(value): void => {
                    setQueryParam({ orderBy: value as string })
                  }}
                >
                  {selectItems.map((item, i) => (
                    <MenuItemOption key={i} value={item.value}>
                      {item.label}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Portal>
          </>
        )}
      </Menu>
    </Box>
  )
}

export default SelectFilter
