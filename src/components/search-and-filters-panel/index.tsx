import { FC, ComponentProps } from 'react'
import { Stack, Box } from '@chakra-ui/react'
import SelectFilters from '@/components/select-filter'
import SectionTitle from '@/components/section-title'

type Props = ComponentProps<typeof Stack> & {
  title?: string
}

const SearchAndFiltersPanel: FC<Props> = ({ title, children }) => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: 6, md: 6 }}
      w="full"
      justifyContent={{ md: 'space-between' }}
      flexWrap="wrap"
    >
      {title && <SectionTitle flex={0.5} mb={0} title={title} />}
      {children && <Box flex={1}>{children}</Box>}
      <SelectFilters minW="260px" />
    </Stack>
  )
}

export default SearchAndFiltersPanel
