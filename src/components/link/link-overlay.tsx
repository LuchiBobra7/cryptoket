import NextLink, { LinkProps } from 'next/link'
import {
  LinkOverlay as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

type Props = LinkProps & ChakraLinkProps

const LinkOverlay = ({ href, children, ...rest }: Props) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  )
}

export default LinkOverlay
