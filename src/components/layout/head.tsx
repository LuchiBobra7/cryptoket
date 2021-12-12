import HeadComponent from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants/main'
import { HeadProps } from '@/types/head'

const Head = ({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
}: HeadProps) => {
  return (
    <HeadComponent>
      <title>
        {title}
        {!!description.length ? ` | ${description}` : null}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </HeadComponent>
  )
}

export default Head
