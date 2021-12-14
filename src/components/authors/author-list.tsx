import { IconButton } from '@chakra-ui/react'
import AuthorItem from './author-item'
import MagicCarousel from '@/components/carousel'
import ArrowLeftCircle from '@/components/icon/arrow-left-circle'
import ArrowRightCircle from '@/components/icon/arrow-right-circle'
import { AuthorListProps } from '@/types/authors'

type Props = {
  items: AuthorListProps['edges']
}

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 360 },
    items: 2,
  },
  base: {
    breakpoint: { max: 360, min: 0 },
    items: 1,
  },
}

//TODO: Create JSX Component with button groups
const customLeftArrow = (
  <IconButton
    aria-label="arrow"
    variant="unstyled"
    zIndex={0}
    position="absolute"
    opacity="0.8"
    left={0}
    ml={-1}
    _hover={{ opacity: 1, transform: 'scale(1.01)' }}
    icon={<ArrowLeftCircle />}
  />
)

//TODO: Create JSX Component with button groups
const customRightArrow = (
  <IconButton
    aria-label="arrow"
    variant="unstyled"
    zIndex={0}
    position="absolute"
    opacity="0.8"
    right={0}
    mr={-1}
    _hover={{ opacity: 1, transform: 'scale(1.01)' }}
    icon={<ArrowRightCircle />}
  />
)

const AuthorList = ({ items }: Props) => {
  return (
    <MagicCarousel
      position={'relative'}
      responsive={responsive}
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      overflowX={{ base: 'auto', md: 'hidden' }}
      removeArrowOnDeviceType={['tablet', 'mobile', 'base']}
      minHeight="240px"
      mr={{ base: -6, md: 0 }}
      pb={6}
      mb={-6}
    >
      {items?.map(({ node }, i) => (
        <AuthorItem i={i} key={node.id} item={node} />
      ))}
    </MagicCarousel>
  )
}

export default AuthorList
