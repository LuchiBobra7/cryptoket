import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import {
  Container,
  SimpleGrid,
  HStack,
  VStack,
  Heading,
  Text,
  Box,
  Button,
  AspectRatio,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import SectionTitle from '@/components/section-title'
import Image from '@/components/image'
import ErrorMessage from '@/components/error-message'
import CheckoutModal from '@/components/checkout-modal'
import { getBid, getBids } from '@/data/index'
import { ROUTES } from '@/constants/routes'
import { V_SPACING_BETWEEN_PAGE_SECTIONS } from '@/constants/layout'
import { CURRENCY } from '@/constants/main'
import { BidDetailsProps } from '@/types/bids'

type Props = {
  bidDetails: BidDetailsProps['bid']
}

const BidDetailsPage = ({ bidDetails }: Props) => {
  const { isFallback } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (isFallback) {
    return 'Loading...'
  }
  if (!bidDetails) {
    return <ErrorMessage />
  }
  return (
    <Container alignItems="flex-start">
      <SimpleGrid columns={{ md: 2 }} spacing={0}>
        <Box
          py={V_SPACING_BETWEEN_PAGE_SECTIONS}
          pr={{ md: 12 }}
          flex={1}
          justifyContent="flex-end"
        >
          <AspectRatio
            ratio={1}
            width="full"
            bg={useColorModeValue('gray.100', 'black.4')}
            overflow="hidden"
            borderRadius="2xl"
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={bidDetails.image?.thumbnail || ''}
              placeholder="blur"
              blurDataURL={bidDetails.image?.blurDataURL}
            />
          </AspectRatio>
        </Box>
        <VStack
          alignItems="flex-start"
          py={V_SPACING_BETWEEN_PAGE_SECTIONS}
          spacing={4}
          pl={{ md: 7 }}
          borderLeftWidth={{ md: 3 }}
          flex={1}
        >
          <SectionTitle title="Abstact Smoke Red Blue" mb={0} />
          <Text>
            From{' '}
            <Text fontWeight="bold" as="span">
              {bidDetails.price} {CURRENCY}
            </Text>
          </Text>
          {bidDetails.author && (
            <HStack spacing={3}>
              <Avatar
                size="lg"
                src={bidDetails.author.image?.thumbnail || ''}
              />
              <Heading fontSize="md">{bidDetails.author.name}</Heading>
            </HStack>
          )}

          <Tabs colorScheme="black">
            <TabList>
              <Tab>Details</Tab>
              <Tab>Offers</Tab>
              <Tab>History</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text color="gray.2" lineHeight="26px">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Text>
              </TabPanel>
              <TabPanel>
                <Text>two!</Text>
              </TabPanel>
              <TabPanel>
                <Text>three!</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <HStack spacing={4} w="full">
            <Button variant="primary" rounded="xl" flex={1} onClick={onOpen}>
              Buy for {bidDetails.price} {CURRENCY}
            </Button>
            <CheckoutModal
              bidDetails={bidDetails}
              isOpen={isOpen}
              onClose={onClose}
            />
            <Button variant="outline" colorScheme="pink" rounded="xl" flex={1}>
              Make Offer
            </Button>
          </HStack>
        </VStack>
      </SimpleGrid>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const bids = await getBids()
  return {
    paths: bids.edges.map(({ node }) => `${ROUTES.BID}/${node.slug}`),
    fallback: true,
  }
}

type ParamsProps = {
  params: GetStaticProps & { slug: string }
}

export const getStaticProps = async ({
  params: { slug = '' },
}: ParamsProps) => {
  const bidDetails = await getBid(slug as string)
  return {
    props: {
      bidDetails,
      fallback: true,
    },
  }
}

export default BidDetailsPage
