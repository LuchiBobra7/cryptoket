import { Heading, Avatar, AvatarBadge, Text, LinkBox } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import Card from '@/components/card'
import LinkOverlay from '@/components/link/link-overlay'
import { AuthorListProps } from '@/types/authors'
import { ROUTES } from '@/constants/routes'

type Props = {
  item: AuthorListProps['edges'][0]['node']
  i: number
}

const AuthorItem = ({ item, i }: Props) => (
  <LinkBox
    as={Card}
    className="author-card"
    position="relative"
    transition="box-shadow 0.2s ease-in"
    _hover={{
      boxShadow: 'lg',
    }}
    _before={{
      content: `"${i + 1}"`,
      position: 'absolute',
      top: 2,
      left: 2,
      width: 7,
      height: 7,
      borderRadius: 'full',
      background: 'pink.500',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '600',
      fontSize: 'xs',
    }}
  >
    <Avatar
      size="lg"
      mb={2}
      src={item.image?.thumbnail}
      sx={{
        '& img': {
          transition: 'filter 0.2s ease-out',
        },
        '.author-card:hover & img': {
          filter: 'brightness(1.1)',
        },
      }}
    >
      {item.isVerified && (
        <AvatarBadge
          boxSize="1.25rem"
          bg="green.500"
          border="none"
          bottom="0.3rem"
          right="0.3rem"
        >
          <CheckIcon w={2.5} h={2.5} />
        </AvatarBadge>
      )}
    </Avatar>
    <Heading fontSize="md" maxWidth="full" isTruncated>
      <LinkOverlay href={`${ROUTES.AUTHOR}/${item.slug}`}>
        {item.name}
      </LinkOverlay>
    </Heading>
    <Heading fontSize="md">
      {item.income}
      {'  '}
      <Text as="span" fontWeight="normal">
        ETH
      </Text>
    </Heading>
  </LinkBox>
)

export default AuthorItem
