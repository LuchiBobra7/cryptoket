import { FC, ComponentProps } from 'react'
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { AuthorListProps } from '@/types/authors'
import { AUTHOR_IMAGE_SIZE } from '@/constants/images'

type Props = ComponentProps<typeof Avatar> & {
  image: AuthorListProps['edges'][0]['node']['image']
  isVerified?: AuthorListProps['edges'][0]['node']['isVerified']
  avatarSize?: string | number
}

const AuthorAvatar: FC<Props> = ({
  avatarSize,
  image,
  isVerified,
  ...props
}) => (
  <Avatar
    width={avatarSize || AUTHOR_IMAGE_SIZE.MD}
    height={avatarSize || AUTHOR_IMAGE_SIZE.MD}
    src={image?.thumbnail || ''}
    {...props}
  >
    {isVerified && (
      <AvatarBadge
        boxSize="20%"
        bg="green.500"
        border="none"
        bottom="7%"
        right="7%"
      >
        <CheckIcon w="50%" h="50%" color="black.1" />
      </AvatarBadge>
    )}
  </Avatar>
)

export default AuthorAvatar
