import { FC, ComponentProps } from 'react'
import { Heading, Text, LinkBox } from '@chakra-ui/react'
import Card from '@/components/card'
import LinkOverlay from '@/components/link/link-overlay'
import AuthorAvatar from '@/components/authors/author-avatar'
import { AuthorListProps } from '@/types/authors'
import { ROUTES } from '@/constants/routes'
import { CURRENCY } from '@/constants/main'
import { AUTHOR_IMAGE_SIZE } from '@/constants/images'

type Props = ComponentProps<typeof LinkBox> & {
  item: AuthorListProps['edges'][0]['node']
  i: number
}

const AuthorItem: FC<Props> = ({ item, i, ...props }) => {
  return (
    <LinkBox
      as={Card}
      className="author-card"
      position="relative"
      transition="box-shadow 0.2s ease-in"
      gap={2}
      mb={6}
      _hover={{
        boxShadow: 'lg',
      }}
      _before={{
        content: `"${i + 1}"`,
        alignSelf: 'flex-start',
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        margin: -2,
        borderRadius: '50%',
        background: 'pink.500',
        fontSize: 'sm',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        lineHeight: '1.2',
      }}
      {...props}
    >
      <AuthorAvatar
        image={item.image}
        isVerified={item.isVerified}
        width={AUTHOR_IMAGE_SIZE.MD}
        height={AUTHOR_IMAGE_SIZE.MD}
        mb={2}
        sx={{
          '& img': {
            transition: 'filter 0.2s ease-out',
          },
          '.author-card:hover & img': {
            filter: 'brightness(1.1)',
          },
        }}
      />
      <Heading fontSize="md" maxWidth="full" isTruncated>
        <LinkOverlay href={`${ROUTES.AUTHOR}/${item.slug}`}>
          {item.name}
        </LinkOverlay>
      </Heading>
      <Heading fontSize="md" whiteSpace="nowrap" isTruncated>
        {item.income}
        {'  '}
        <Text as="span" fontWeight="normal">
          {CURRENCY}
        </Text>
      </Heading>
    </LinkBox>
  )
}

export default AuthorItem
