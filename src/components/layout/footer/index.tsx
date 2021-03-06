import {
  Box,
  Container,
  HStack,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
} from '@chakra-ui/react'
import { SITE_NAME } from '@/constants/main'
import Logo from '@/components/logo'
import SocialLinks from '@/components/social-links'
import mainNavItems from '@/components/nav-menu/nav-data'
import { legalInfoLinks } from './support-menu-data'
import MenuHeader from './menu-header'
import Menu from './menu'

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="footer">
      <Box py={9} borderTopWidth={2}>
        <Container
          as={HStack}
          spacing={{ base: 0, lg: 4 }}
          alignItems="flex-start"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <VStack
            alignItems="flex-start"
            minW={{ base: '100%', md: 'auto' }}
            mb={{ base: 7, md: 0 }}
            flex={2.5}
            spacing={7}
          >
            <Logo isFullWidth />
            <Heading fontSize="md">Get the latest Updates</Heading>
            <HStack spacing={-5} maxW={{ md: '75%' }}>
              <Input placeholder="Email me" type="email" />
              <Button variant="primary" zIndex="1">
                Email me
              </Button>
            </HStack>
            <FormControl display="flex">
              <FormLabel htmlFor="switch-theme" fontSize="sm" mb="0">
                {colorMode === 'light' ? 'Dark' : 'Light'} theme
              </FormLabel>
              <Switch
                id="switch-theme"
                colorScheme="pink"
                onChange={toggleColorMode}
              />
            </FormControl>
          </VStack>

          <VStack alignItems="flex-start" flex={1} spacing={7}>
            <MenuHeader title={SITE_NAME} />
            <Menu items={mainNavItems} />
          </VStack>
          <VStack alignItems="center" flex={1} spacing={7}>
            <MenuHeader title="Support" />
            <Menu items={legalInfoLinks} />
          </VStack>
        </Container>
      </Box>
      <Box py={6} borderTopWidth={2}>
        <Container
          as={HStack}
          justifyContent={{ base: 'center', lg: 'space-between' }}
          flexWrap="wrap"
        >
          <Text fontWeight="600">{SITE_NAME}, Inc. All Rights Reserved</Text>
          <SocialLinks />
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
