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
        ([_, item]: any) => item != null && item.trim() !== ''
      )
    ) ?? {}
  )
}
