import { Heading } from '@chakra-ui/react'

type Props = {
  title: string
}

const MenuHeader = ({ title }: Props) => {
  return (
    <Heading fontSize="xl" lineHeight={1.7} w="full">
      {title}
    </Heading>
  )
}

export default MenuHeader
