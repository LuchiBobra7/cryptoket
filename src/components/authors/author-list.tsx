import { IconButton } from '@chakra-ui/react'
import AuthorItem from './author-item'
import EmptyData from '@/components/empty-data'
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
    breakpoint: { max: 768, min: 540 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 540, min: 360 },
    items: 2,
  },
  base: {
    breakpoint: { max: 360, min: 0 },
    items: 1,
  },
}

const styles = {
  variant: 'unstyled',
  zIndex: 0,
  position: 'absolute',
  opacity: '0.8',
  _hover: {
    opacity: 1,
    transform: 'scale(1.01)',
  },
}
const customLeftArrow = (
  <IconButton
    aria-label="arrow-left"
    __css={styles}
    left={0}
    ml={-1}
    icon={<ArrowLeftCircle />}
  />
)

const customRightArrow = (
  <IconButton
    aria-label="arrow-right"
    __css={styles}
    right={0}
    mr={-1}
    icon={<ArrowRightCircle />}
  />
)

const AuthorList = ({ items }: Props) =>
  !!items.length ? (
    <MagicCarousel
      position={'relative'}
      display="flex"
      responsive={responsive}
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      overflowX={{ base: 'auto', md: 'hidden' }}
      removeArrowOnDeviceType={['tablet', 'mobile', 'base']}
      minHeight="240px"
      ml={{ base: 0, md: -3 }}
      mr={{ base: -6, md: -3 }}
      pb={6}
      mb={-6}
    >
      {items?.map(({ node }, i) => (
        <AuthorItem i={i} key={node.id} item={node} mx={3} />
      ))}
    </MagicCarousel>
  ) : (
    <EmptyData />
  )

export default AuthorList
