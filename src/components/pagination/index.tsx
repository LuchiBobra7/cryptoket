import { FC, ComponentProps, useState, useEffect } from 'react'
import { SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { PAGES_QUANTITY } from '@/constants/items'
import usePushToQueries from '@/hooks/usePushToQueries'
import { BidListProps } from '@/types/bids'
import { shortenPagination } from '@/utils/index'

type Props = ComponentProps<typeof SimpleGrid> & {
  pageInfo: BidListProps['pageInfo']
  activePage: number
  pagesQuantity: number
}

const Pagination: FC<Props> = ({
  pageInfo,
  activePage = 1,
  pagesQuantity,
  ...props
}) => {
  const { hasPreviousPage, hasNextPage } = pageInfo ?? {}
  const hasPagination = hasPreviousPage || hasNextPage
  const { setQueryParam } = usePushToQueries()

  const [currentPage, setCurrentPage] = useState<number>(activePage)
  const [pagesArray, setPagesArray] = useState<(string | number)[]>([])

  useEffect(() => {
    if (currentPage === 1) setQueryParam({ page: null })
    else setQueryParam({ page: currentPage })

    const shortenPaginationArray = shortenPagination(
      pagesQuantity,
      PAGES_QUANTITY,
      Number(currentPage)
    )
    setPagesArray(shortenPaginationArray)
  }, [currentPage])

  const increasePage = () => {
    if (hasNextPage) setCurrentPage((prev) => prev + 1)
  }

  const decreasePage = () => {
    if (hasPreviousPage) setCurrentPage((prev) => prev - 1)
  }

  const PaginationButton = ({ ...props }) => (
    <Button
      variant={'ghost'}
      colorScheme="pink"
      borderRadius="xl"
      size="sm"
      width="32px"
      height="32px"
      p={0}
      {...props}
    ></Button>
  )

  if (!hasPagination) return null
  return (
    <HStack justify="center" w="full" spacing={2} {...props}>
      <PaginationButton
        onClick={() => decreasePage()}
        disabled={!hasPreviousPage}
      >
        {'<'}
      </PaginationButton>
      {pagesArray.map((item) => (
        <PaginationButton
          key={item}
          variant={currentPage === item ? 'primary' : 'ghost'}
          onClick={() => setCurrentPage(item as number)}
        >
          {item}
        </PaginationButton>
      ))}

      <PaginationButton onClick={() => increasePage()} disabled={!hasNextPage}>
        {'>'}
      </PaginationButton>
    </HStack>
  )
}

export default Pagination
