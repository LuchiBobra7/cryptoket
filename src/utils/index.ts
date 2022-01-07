import { Query } from '@/types/query'

export const isEmpty = (val: any) => {
  return val === undefined || val == null || val.length <= 0 ? true : false
}

export const slugify = (str: string) => {
  str = str
    .trim()
    .toLowerCase()
    .replaceAll(' ', '-') // replace dotes by -
    .replaceAll('.', '-') // replace dotes by -
    .replace(/-+/g, '-') // collapse dashes
  return str
}

//@ts-ignore
export const removeEmptyParams = (obj: Query): Query => {
  return (
    Object.fromEntries(
      Object.entries(obj).filter(
        ([_, item]: any) => item != null && item.toString().trim() !== ''
      )
    ) ?? {}
  )
}

export const shortenAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`

export const shortenPagination = (
  totalQuantity: number,
  maxPageSize: number,
  currentPage: number
) => {
  const paginationArray = [...new Array(totalQuantity)].map((_, i) => i + 1)
  let shortenArr = []
  if (currentPage < maxPageSize) {
    shortenArr = paginationArray.slice(0, maxPageSize)
    if (totalQuantity > maxPageSize) return [...shortenArr, '...']
    else return shortenArr
  } else {
    shortenArr = paginationArray.slice(
      currentPage - 1,
      maxPageSize + currentPage - 1
    )
    return ['...', ...shortenArr]
  }
}

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
