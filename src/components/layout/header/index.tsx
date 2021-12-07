import {
  Box,
  HStack,
  Container,
  Button,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from '@/components/logo'
import SearchBar from '@/components/search-bar'
import NavMenu from '@/components/nav-menu'
import useBreakpoint from '@/hooks/useBreakpoint'
import { HEADER_HEIGHT, HEADER_GAP } from '@/constants/layout'
import MobileNav from '@/components/nav-menu/mobile-nav'

const Header = () => {
  const { isLargeScreen } = useBreakpoint()
  const { isOpen, onToggle } = useDisclosure()
  const bg = useColorModeValue('white', 'black.1')
  const borderColor = useColorModeValue('blackAlpha.100', 'gray.4')
  return (
    <Box
      as="header"
      py={4}
      borderBottomWidth={2}
      borderColor={borderColor}
      height={HEADER_HEIGHT}
      position="sticky"
      top={0}
      backgroundColor={bg}
      filter="opacity(90%)"
      backdropFilter="saturate(180%) blur(5px)"
      zIndex={2}
    >
      <Container as={HStack} maxW="container.2xl" spacing={HEADER_GAP}>
        <Logo />
        <SearchBar />
        {isLargeScreen ? (
          <HStack spacing={HEADER_GAP}>
            <NavMenu />
            <HStack spacing={2}>
              <Button variant="primary" rounded="xl">
                Create
              </Button>
              <Button variant="outline" colorScheme="pink" rounded="xl">
                Connect
              </Button>
            </HStack>
          </HStack>
        ) : (
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        )}
      </Container>
      {!isLargeScreen && (
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      )}
    </Box>
  )
}

export default Header
