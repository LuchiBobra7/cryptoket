import { HStack } from '@chakra-ui/react'
import SearchBar from '@/components/search-bar'
import SelectFilters from '@/components/select-filter'

const SearchAndFiltersPanel = () => {
  return (
    <HStack spacing={7} w="full">
      <SearchBar flex={2.5} />
      <SelectFilters />
    </HStack>
  )
}

export default SearchAndFiltersPanel
