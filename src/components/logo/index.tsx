import NextLink from 'next/link'
import { Heading, Link, Icon } from '@chakra-ui/react'
import LogoIcon from '@/components/icon/logo'
import useBreakpoint from '@/hooks/useBreakpoint'

type Props = {
  isFullWidth?: boolean
}

const Logo = ({ isFullWidth = false }: Props) => {
  const { isLargeScreen } = useBreakpoint()
  return (
    <NextLink href="/" passHref>
      <Link>
        <Heading fontSize="3xl">
          <Icon
            as={LogoIcon}
            isFullWidth={isFullWidth}
            width={isFullWidth || isLargeScreen ? '132px' : '32px'}
            height="32px"
          />
        </Heading>
      </Link>
    </NextLink>
  )
}

export default Logo
