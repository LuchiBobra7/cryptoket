import { useContext } from 'react'
import { HStack, Button } from '@chakra-ui/react'
import Link from '@/components/link'
import { ROUTES } from '@/constants/routes'
import { BUTTONS_GAP } from '@/constants/layout'
import { UserContext, AppContextInterface } from '@/context/index'
import { shortenAddress } from '@/utils/index'

const HeaderButtons = () => {
  const { currentAccount, connectWallet } = useContext(
    UserContext
  ) as AppContextInterface
  return (
    <HStack spacing={BUTTONS_GAP}>
      <Button href={ROUTES.CREATE_BID} as={Link} variant="primary">
        Create Item
      </Button>
      <Button
        variant="outline"
        colorScheme="pink"
        onClick={() => connectWallet()}
      >
        {currentAccount ? shortenAddress(currentAccount) : 'Connect Wallet'}
      </Button>
    </HStack>
  )
}

export default HeaderButtons
