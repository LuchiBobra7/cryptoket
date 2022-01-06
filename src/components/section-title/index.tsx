import { Heading } from '@chakra-ui/react'

type Props = {
  title: string
  [x: string]: any
}

const SectionTitle = ({ title, ...props }: Props) => (
  <Heading
    fontSize={{ base: '2xl', lg: '3xl' }}
    mb={{ base: 4, lg: 10 }}
    {...props}
  >
    {title}
  </Heading>
)

export default SectionTitle
