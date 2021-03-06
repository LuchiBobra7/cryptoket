import {
  HStack,
  Heading,
  Text,
  Flex,
  Button,
  AspectRatio,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from '@/components/image'
import { BidDetailsProps } from '@/types/bids'
import { CURRENCY } from '@/constants/main'
import { BUTTONS_GAP } from '@/constants/layout'

type Props = {
  bidDetails: BidDetailsProps['bid']
  isOpen: boolean
  onClose: () => void
}

const CheckoutModal = ({ bidDetails, isOpen, onClose }: Props) => {
  return bidDetails ? (
    <Portal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalHeader
            display="flex"
            justifyContent="center"
            borderBottomWidth={1}
          >
            Check Out
          </ModalHeader>
          <ModalBody py={6} overflowX={{ base: 'scroll', md: 'auto' }}>
            <Table variant="unstyled">
              <Thead>
                <Tr>
                  <Th>Item</Th>
                  <Th textAlign="end">Subtotal</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <HStack spacing={4} alignItems="flex-start">
                      <AspectRatio
                        ratio={1}
                        width={20}
                        bg={useColorModeValue('gray.100', 'black.4')}
                        overflow="hidden"
                      >
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src={bidDetails.image?.thumbnail || ''}
                          placeholder="blur"
                          blurDataURL={bidDetails.image?.blurDataURL}
                        />
                      </AspectRatio>
                      <Flex
                        direction="column"
                        alignSelf="center"
                        justifyContent="flex-start"
                      >
                        <Text fontSize="md">{bidDetails.author?.name}</Text>
                        <Heading fontSize="md">{bidDetails.title}</Heading>
                      </Flex>
                    </HStack>
                  </Td>
                  <Td textAlign="end">
                    {bidDetails.price} {CURRENCY}
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total</Th>
                  <Th textAlign="end">
                    {bidDetails.price} {CURRENCY}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </ModalBody>
          <ModalFooter
            as={HStack}
            spacing={BUTTONS_GAP}
            justifyContent="center"
            borderTopWidth={1}
          >
            <Button variant="primary" borderRadius="xl" minW="120px">
              Checkout
            </Button>
            <Button
              minW="120px"
              colorScheme="pink"
              variant="outline"
              borderRadius="xl"
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Portal>
  ) : null
}

export default CheckoutModal
