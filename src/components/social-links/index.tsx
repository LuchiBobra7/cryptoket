import {
  IconButton,
  List,
  ListItem,
  Link,
  Tooltip,
  HStack,
} from '@chakra-ui/react'
import { socialLinkItems } from './social-links-data'

const SocialLinks = () => {
  return (
    <HStack as={List} spacing={4}>
      {socialLinkItems.map(({ href, title, icon }) => (
        <ListItem key={href}>
          <Tooltip label={title} placement="top">
            <IconButton
              as={Link}
              variant="unstyled"
              href={href}
              icon={icon}
              fontSize="2xl"
              aria-label={title}
              opacity="0.9"
              transition="all 0.2s ease-in"
              _hover={{ opacity: 1 }}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Tooltip>
        </ListItem>
      ))}
    </HStack>
  )
}

export default SocialLinks
