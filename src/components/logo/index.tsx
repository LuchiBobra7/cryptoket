import { Heading, Icon } from '@chakra-ui/react'
import Link from '@/components/link'
import LogoIcon from '@/components/icon/logo'
import useBreakpoint from '@/hooks/useBreakpoint'
import { LOGO_SIZE } from '@/constants/images'

type Props = {
  isFullWidth?: boolean
}

const Logo = ({ isFullWidth = false }: Props) => {
  const { isLargeScreen } = useBreakpoint()
  return (
    <Link href="/">
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
  )
}

export default Logo
