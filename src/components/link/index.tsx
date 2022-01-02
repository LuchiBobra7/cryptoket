import { FC } from 'react'
import NextLink, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

type Props = LinkProps & ChakraLinkProps

const Link: FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }} {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default Link
