import { HStack } from '@chakra-ui/react'
import navItems from './nav-data'
import NavLink from './nav-link'
import { HEADER_GAP } from '@/constants/layout'

const NavMenu = () => {
  return (
    <HStack alignItems="center" spacing={HEADER_GAP} as="nav">
      {navItems.map((item, i) => (
        <NavLink item={item} key={i} fontWeight="600" />
      ))}
    </HStack>
  )
}

export default NavMenu
