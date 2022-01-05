import { FC } from 'react'
import { Icon } from '@chakra-ui/react'

const Image: FC = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 115 115" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M32.7612 114.583H82.2332C101.586 114.583 114.583 101.008 114.583 80.8087V34.1913C114.583 13.9917 101.586 0.416687 82.239 0.416687H32.7612C13.414 0.416687 0.416748 13.9917 0.416748 34.1913V80.8087C0.416748 101.008 13.414 114.583 32.7612 114.583ZM37.5144 51.7917C29.6446 51.7917 23.2501 45.3885 23.2501 37.5209C23.2501 29.6532 29.6446 23.25 37.5144 23.25C45.3784 23.25 51.7787 29.6532 51.7787 37.5209C51.7787 45.3885 45.3784 51.7917 37.5144 51.7917ZM102.144 74.248C104.055 79.1493 103.062 85.0402 101.019 89.8944C98.5965 95.6675 93.9584 100.039 88.1149 101.947C85.5204 102.796 82.7995 103.167 80.0844 103.167H31.9761C27.1888 103.167 22.9526 102.018 19.4797 99.8795C17.3042 98.5364 16.9196 95.4378 18.5326 93.4289C21.2305 90.0711 23.8939 86.7015 26.5803 83.3024C31.7006 76.7988 35.1504 74.9137 38.9848 76.569C40.5404 77.2524 42.1017 78.2774 43.709 79.3613C47.9912 82.2715 53.9437 86.2714 61.7848 81.9298C67.1506 78.9245 70.2628 73.7695 72.973 69.2804L73.0183 69.2053C73.2099 68.8911 73.3998 68.5769 73.5892 68.2636L73.5904 68.2615C74.5013 66.7544 75.3999 65.2675 76.4165 63.8976C77.6908 62.1833 82.4149 56.8226 88.534 60.6399C92.4315 63.0434 95.7092 66.2952 99.2164 69.7768C100.554 71.1081 101.507 72.6221 102.144 74.248Z"
      />
    </Icon>
  )
}

export default Image
