import { useRouter } from 'next/router'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'src/components/link'
import { MenuItemProps } from '@/types/menu'

type Props = {
  item: MenuItemProps
  [x: string]: any
}

const NavLink = ({ item, ...props }: Props) => {
  const { pathname } = useRouter()
  const initialColor = useColorModeValue('gray.2', 'whiteAlpha.700')
  const activeColor = useColorModeValue('dark', 'white')
  return (
    <Link
      href={item.href}
      color={pathname == item.href ? activeColor : initialColor}
      whiteSpace="nowrap"
      _hover={{ textDecoration: 'none', color: activeColor }}
      {...props}
    >
      {item.title}
    </Link>
  )
}

export default NavLink
