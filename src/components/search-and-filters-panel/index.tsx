import { FC, ComponentProps } from 'react'
import { HStack, Box } from '@chakra-ui/react'
import SelectFilters from '@/components/select-filter'
import SectionTitle from '@/components/section-title'

type Props = ComponentProps<typeof HStack> & {
  title?: string
}

const SearchAndFiltersPanel: FC<Props> = ({ title, children }) => {
  return (
    <HStack spacing={6} w="full">
      {title && <SectionTitle flex={0.5} mb={0} title={title} />}
      {children && <Box flex={1}>{children}</Box>}
      <SelectFilters ml="auto" />
    </HStack>
  )
}

export default SearchAndFiltersPanel
