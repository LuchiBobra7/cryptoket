import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

const ArrowLeftCircle: FC = (props) => {
  return (
    <Icon width="41px" height="40px" viewBox="0 0 41 40" fill="none" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.5 4.58368C11.9866 4.58368 5.08329 11.4853 5.08329 20.0003C5.08329 28.5137 11.9866 35.417 20.5 35.417C29.0133 35.417 35.9166 28.5137 35.9166 20.0003C35.9166 11.4853 29.0133 4.58368 20.5 4.58368Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.9038 14.215L17.0938 20L22.9038 25.785"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export default ArrowLeftCircle
