import { FC, ComponentProps } from 'react'
import { chakra, Box } from '@chakra-ui/react'
import Carousel, { CarouselProps } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

type Props = ComponentProps<typeof Box> & CarouselProps

const SlickCarousel = chakra(Carousel)

const MagicCarousel: FC<Props> = ({ children, ...props }) => {
  return <SlickCarousel {...props}>{children}</SlickCarousel>
}

export default MagicCarousel
