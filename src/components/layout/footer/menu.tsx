import { useRouter } from 'next/router'
import { List, ListItem, useColorModeValue } from '@chakra-ui/react'
import NavLink from '@/components/nav-menu/nav-link'
import { MenuItemsProps } from '@/types/menu'

const Menu = ({ items }: MenuItemsProps) => {
  const { pathname } = useRouter()
  const initialColor = useColorModeValue('black.2', 'whiteAlpha.800')
  const activeColor = useColorModeValue('pink.500', 'white')
  return (
    <List spacing={4} w="full">
      {items.map((item, i) => (
        <ListItem key={i}>
          <NavLink
            href={item.href}
            item={item}
            color={pathname == item.href ? activeColor : initialColor}
            _hover={{ color: activeColor }}
          >
            {item.title}
          </NavLink>
        </ListItem>
      ))}
    </List>
  )
}

export default Menu
