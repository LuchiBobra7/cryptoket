import { useState, useRef } from 'react'
import Slider from 'react-slick'
import { IconButton, Box } from '@chakra-ui/react'
import AuthorItem from './author-item'
import EmptyData from '@/components/empty-data'
import ArrowLeftCircle from '@/components/icon/arrow-left-circle'
import ArrowRightCircle from '@/components/icon/arrow-right-circle'
import { AuthorListProps } from '@/types/authors'

type Props = {
  items: AuthorListProps['edges']
}

const iconStyles = {
  variant: 'unstyled',
  zIndex: 1,
  position: 'absolute',
  opacity: '0.8',
  top: '50%',
  mt: '-15px',
  transform: 'translateY(-50%)',
  _hover: {
    opacity: 1,
  },
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const AuthorList = ({ items }: Props) => {
  const [slider, setSlider] = useState<Slider | null>(null)
  if (!items.length) return <EmptyData />
  return (
    <Box
      position={'relative'}
      height={'240px'}
      width={'full'}
      overflow="hidden"
      pb={6}
      mb={-6}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="arrow-left"
        __css={iconStyles}
        left={0}
        ml={-1}
        icon={<ArrowLeftCircle />}
        onClick={() => slider?.slickPrev()}
      />
      {/* Right Icon */}
      <IconButton
        aria-label="arrow-right"
        __css={iconStyles}
        right={0}
        mr={-1}
        icon={<ArrowRightCircle />}
        onClick={() => slider?.slickNext()}
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {items?.map(({ node }, i) => (
          <Box key={node.id}>
            <AuthorItem i={i} item={node} mx={3} />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
export default AuthorList
