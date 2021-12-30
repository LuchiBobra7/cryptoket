import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { removeEmptyParams } from '@/utils/index'

type Props = {
  [x: string]: string | number | null
}

const usePushToQueries = () => {
  const [queryParam, setQueryParam] = useState<Props | null>(null)
  const { push, pathname, query } = useRouter()
  const currentPathname = pathname.replace('[slug]', query.slug as string)
  const [path, setPath] = useState<string>(currentPathname)
  const { slug, ...currentQuery } = query

  useEffect(() => {
    if (!!queryParam && !!Object.values(queryParam)?.length) {
      const newQuery = { ...currentQuery, ...queryParam }
      const query = removeEmptyParams(newQuery)
      push(
        {
          pathname: path,
          query,
        },
        undefined,
        { scroll: false }
      )
    }
  }, [queryParam])

  return { queryParam, setQueryParam, path, setPath }
}

export default usePushToQueries
