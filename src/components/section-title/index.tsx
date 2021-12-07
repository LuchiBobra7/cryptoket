import { Heading } from '@chakra-ui/react'

type Props = {
  title: string
  [x: string]: any
}

const SectionTitle = ({ title, ...props }: Props) => (
  <Heading fontSize="3xl" mb={10} {...props}>
    {title}
  </Heading>
)

export default SectionTitle
