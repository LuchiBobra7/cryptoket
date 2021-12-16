import NextLink, { LinkProps } from 'next/link'
import {
  LinkOverlay as ChakraLinkOverlay,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

type Props = LinkProps & ChakraLinkProps

const LinkOverlay = ({ href, children, ...rest }: Props) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLinkOverlay {...rest}>{children}</ChakraLinkOverlay>
    </NextLink>
  )
}

export default LinkOverlay
