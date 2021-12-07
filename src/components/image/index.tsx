import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { chakra, ImageProps as ChakraImageProps } from '@chakra-ui/react'
import ImageFallback from './fallback'

type Props = NextImageProps & Omit<ChakraImageProps, 'src'>

const MagicImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'layout',
      'src',
      'alt',
      'placeholder',
      'blurDataURL',
      'width',
      'height',
    ].includes(prop),
})

const Image = (props: Props) => (
  <MagicImage fallback={ImageFallback} {...props} />
)

export default Image
