import NextLink from 'next/link'
import { Heading, Link, Icon } from '@chakra-ui/react'
import LogoIcon from '@/components/icon/logo'
import useBreakpoint from '@/hooks/useBreakpoint'
import { LOGO_SIZE } from '@/constants/images'

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
            width={
              isFullWidth || isLargeScreen
                ? LOGO_SIZE.LG.WIDTH
                : LOGO_SIZE.SM.WIDTH
            }
            height={isLargeScreen ? LOGO_SIZE.LG.HEIGHT : LOGO_SIZE.SM.HEIGHT}
          />
        </Heading>
      </Link>
    </NextLink>
  )
}

export default Logo
