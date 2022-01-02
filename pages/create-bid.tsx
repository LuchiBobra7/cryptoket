import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react'
import SectionTitle from '@/components/section-title'
import InnerPageContainer from '@/components/layout/inner-page-container'
import Image from '@/components/icon/image'

const CreateBidPage = () => {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    maxFiles: 1,
    accept:
      'image/jpeg, image/jpg, image/png, image/gif, image/svg, image/webp',
    maxSize: 104857600,
  })

  const acceptedFile = acceptedFiles.map((file: any) => (
    <Box key={file?.path}>
      {file?.path} - {file.size} bytes
    </Box>
  ))
  return (
    <InnerPageContainer maxW="container.sm">
      <Box as="section" w="full">
        <SectionTitle title="Create new item" />
        <VStack as="form" spacing={9} w="full">
          <Input
            as={Box}
            border="1px dashed"
            py={6}
            h="300px"
            display="flex"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
            {...getRootProps({ refKey: 'innerRef' })}
          >
            <input {...getInputProps()} />
            <VStack spacing={4}>
              <Heading fontSize="md">
                JPG, PNG, GIF, SVG, WEBP, Max 100mb
              </Heading>
              <Image />
              {isDragActive ? (
                <Heading fontSize="sm">Drop the files here ...</Heading>
              ) : (
                <>
                  <Heading fontSize="sm">
                    Drag and Drop some file,
                    <br />{' '}
                    <Text as="span" fontWeight="normal">
                      or
                    </Text>{' '}
                    click to select or browse media on your device
                  </Heading>
                </>
              )}

              {acceptedFile && <Box>{acceptedFile}</Box>}
            </VStack>
          </Input>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea minH="160px" />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input />
          </FormControl>
          <Button alignSelf="flex-end" variant="primary">
            Create item
          </Button>
        </VStack>
      </Box>
    </InnerPageContainer>
  )
}

export default CreateBidPage
