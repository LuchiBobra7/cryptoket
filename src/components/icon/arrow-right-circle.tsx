import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

const ArrowRightCircle: FC = (props) => {
  return (
    <Icon width="41px" height="40px" viewBox="0 0 41 40" fill="none" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.5 35.4163C29.0133 35.4163 35.9166 28.5147 35.9166 19.9997C35.9166 11.4863 29.0133 4.58299 20.5 4.58299C11.9866 4.58299 5.08331 11.4863 5.08331 19.9997C5.08331 28.5147 11.9866 35.4163 20.5 35.4163Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0961 25.785L23.9061 20L18.0961 14.215"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export default ArrowRightCircle
