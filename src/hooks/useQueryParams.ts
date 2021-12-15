import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { removeEmptyParams, isEmpty } from '@/utils/index'
import { Query } from '@/types/query'

const useQueryParams = (queryObj: Query | null): any => {
  const { query, replace, pathname } = useRouter()
  const [newQuery, setNewQuery] = useState(
    !isEmpty(queryObj) ? queryObj : query
  )
  const [newPath, setNewPath] = useState(pathname)
  useEffect(() => {
    let cleanedQuery =
      newQuery && !isEmpty(newQuery) ? removeEmptyParams(newQuery) : null
    replace({ pathname: newPath, query: cleanedQuery })
  }, [newQuery, newPath, pathname])

  return { setNewQuery, setNewPath }
}

export default useQueryParams
