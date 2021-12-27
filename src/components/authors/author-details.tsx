import React from 'react'
import { Box, VStack, Heading } from '@chakra-ui/react'
import Image from '@/components/image'
import AuthorAvatar from '@/components/authors/author-avatar'
import { AUTHOR_IMAGE_SIZE } from '@/constants/images'
import { AuthorDetailsProps } from '@/types/authors'

type Props = {
  authorDetails: AuthorDetailsProps['author']
}

const AuthorDetails = ({ authorDetails }: Props) => {
  return (
    <>
      <Box
        as="header"
        position="relative"
        bgColor="blue.800"
        height={300}
        width="full"
      >
        {authorDetails?.bgImage?.thumbnail && (
          <Image
            src={authorDetails?.bgImage?.thumbnail}
            placeholder="blur"
            blurDataURL={
              authorDetails?.bgImage?.blurDataURL ||
              authorDetails?.bgImage?.thumbnail
            }
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
      </Box>
      <VStack spacing={4}>
        <AuthorAvatar
          avatarSize={AUTHOR_IMAGE_SIZE.LG}
          image={authorDetails?.image}
          isVerified={authorDetails?.isVerified}
          marginTop={`-${AUTHOR_IMAGE_SIZE.LG / 2}`}
          borderWidth={5}
          borderColor="black.1"
        />
        <Heading fontSize="3xl">{authorDetails?.name}</Heading>
      </VStack>
    </>
  )
}

export default React.memo(AuthorDetails)
