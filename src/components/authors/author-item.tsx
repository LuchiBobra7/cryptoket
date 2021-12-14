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

const AuthorItem = ({ item, i, ...props }: Props) => (
  <LinkBox
    as={Card}
    className="author-card"
    position="relative"
    transition="box-shadow 0.2s ease-in"
    {...props}
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
      borderRadius: 'full',
      background: 'pink.500',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '600',
      lineHeight: '1.2',
    }}
  >
    <Avatar
      width={20}
      height={20}
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
          boxSize="1rem"
          bg="green.500"
          border="none"
          bottom="0.5rem"
          right="0.5rem"
        >
          <CheckIcon w={2} h={2} />
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
