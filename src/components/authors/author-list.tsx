import { useState, useEffect, useCallback } from 'react'
import { Grid, IconButton, Box } from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import AuthorItem from './author-item'
import { AUTHORS_PER_PAGE } from '@/constants/items'
import EmptyData from '@/components/empty-data'
import ArrowLeftCircle from '@/components/icon/arrow-left-circle'
import ArrowRightCircle from '@/components/icon/arrow-right-circle'
import { AuthorListProps } from '@/types/authors'
import useBreakpoint from '@/hooks/useBreakpoint'

type Props = {
  items: AuthorListProps['edges']
}

type CarouselButtonsProps = {
  enabled: boolean
  onClick: () => void
}

const styles = {
  variant: 'unstyled',
  zIndex: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
}

const PrevButton = ({ enabled, onClick }: CarouselButtonsProps) => (
  <IconButton
    aria-label="arrow-left"
    __css={styles}
    left={0}
    ml={-1}
    display={{ base: 'none', lg: 'block' }}
    onClick={onClick}
    opacity={enabled ? 0.7 : 0}
    icon={<ArrowLeftCircle />}
  />
)

const NextButton = ({ enabled, onClick }: CarouselButtonsProps) => {
  return (
    <IconButton
      aria-label="arrow-right"
      __css={styles}
      right={0}
      mr={-1}
      display={{ base: 'none', lg: 'block' }}
      onClick={onClick}
      opacity={enabled ? 0.7 : 0}
      icon={<ArrowRightCircle />}
    />
  )
}

const AuthorList = ({ items }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 5,
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [embla, onSelect])

  if (!items.length) return <EmptyData />
  return (
    <Box
      ref={viewportRef}
      overflowX={{ base: 'auto', lg: 'hidden' }}
      position="relative"
      px={3}
      mx={-3}
    >
      <Grid
        templateColumns={`repeat(${AUTHORS_PER_PAGE}, minmax(179px, 1fr))`}
        gap="24px"
      >
        {items?.map(({ node }, i) => (
          <AuthorItem key={node.id} i={i} item={node} />
        ))}
      </Grid>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Box>
  )
}
export default AuthorList
