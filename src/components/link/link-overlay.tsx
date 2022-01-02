import { FC } from 'react'
import NextLink, { LinkProps } from 'next/link'
import {
  LinkOverlay as ChakraLinkOverlay,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

type Props = LinkProps & ChakraLinkProps

const LinkOverlay: FC<Props> = ({ href, children, ...props }: Props) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLinkOverlay {...props}>{children}</ChakraLinkOverlay>
    </NextLink>
  )
}

export default LinkOverlay
