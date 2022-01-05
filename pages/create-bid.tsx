import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Button,
  Heading,
  Text,
  AspectRatio,
  useToast,
} from '@chakra-ui/react'
import Image from '@/components/image'
import SectionTitle from '@/components/section-title'
import InnerPageContainer from '@/components/layout/inner-page-container'
import ImageIcon from '@/components/icon/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { uploadFile, createBid } from '@/data/index'
import { formatBytes } from '@/utils/index'

type FormValues = {
  title: string
  description: string
  price: number
  image: string
}

type ErrorValues = {
  label: string
  title: string
  requirmentsText?: string
}

const CreateBidPage = () => {
  const [uploadedFile, setUploadedFile] = useState<any>(null)
  const [submitLoading, setSubmitLoading] = useState<boolean>(false)

  const toast = useToast()

  const {
    register,
    clearErrors,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>()

  const { fileRejections, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'image/jpeg, image/jpg, image/png, image/gif, .svg, image/webp',
    maxSize: 104857600,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (!!file) {
        setUploadedFile(
          Object.assign(file, { preview: URL?.createObjectURL(file) })
        )

        clearErrors(['image'])
      }
    },
  })

  const ErrorText: FC = ({ children }) => (
    <Text color="red.500" fontSize="sm" mt={2}>
      {children}
    </Text>
  )

  const ErrorMessage = ({ label, title, requirmentsText }: ErrorValues) => {
    //@ts-ignore
    const errorType = errors && errors[label]?.type
    if (errorType === 'required')
      return <ErrorText>{title} is required</ErrorText>
    if (errorType === 'minLength')
      return <ErrorText>Too short {label.toLowerCase()}</ErrorText>
    if (errorType === 'maxLength')
      return <ErrorText>Too long {label.toLowerCase()}</ErrorText>
    else
      return (
        <Text fontSize="sm" color="gray.2" mt={2}>
          {requirmentsText}
        </Text>
      )
  }

  const loadedFileErrors =
    fileRejections &&
    fileRejections[0]?.errors?.map((error, i) => (
      <ErrorText key={i}>{error.message}</ErrorText>
    ))

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitLoading(true)
    let formData = new FormData()
    formData.append('fileUpload', uploadedFile)
    const result = await uploadFile(formData)
    if (!!result?.id) {
      createBid(data?.title, data?.description, Number(data?.price), result?.id)
        .then(() => {
          toast({
            position: 'top-right',
            title: 'Sent to moderation',
            description: "Don't worry it will be published soon",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch((err) =>
          toast({
            position: 'top-right',
            title: 'Someting went wrong',
            description: err,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        )
    } else {
      toast({
        position: 'top-right',
        title: 'Image uploading failed',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    setSubmitLoading(false)

    setUploadedFile(null)
    reset(result as any)
  }

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(uploadedFile?.preview)
    },
    [uploadedFile]
  )

  return (
    <InnerPageContainer maxW="container.sm">
      <Box as="section" w="full">
        <SectionTitle title="Create new item" />
        <VStack
          as="form"
          spacing={9}
          w="full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl>
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
              {...register('image', {
                required: true,
              })}
            >
              <input {...getInputProps()} />
              <VStack spacing={7}>
                <Heading fontSize="md">
                  JPG, PNG, GIF, SVG, WEBP, Max 100mb
                </Heading>
                <AspectRatio
                  width="140px"
                  height="140px"
                  ratio={1}
                  position="relative"
                >
                  {uploadedFile?.preview ? (
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={uploadedFile?.preview}
                    />
                  ) : (
                    <ImageIcon />
                  )}
                </AspectRatio>
                {uploadedFile ? (
                  <Heading fontSize="sm">
                    {uploadedFile?.name} - {formatBytes(uploadedFile?.size)}
                  </Heading>
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
                {loadedFileErrors}
              </VStack>
            </Input>

            {errors?.image && <ErrorText>Image is required</ErrorText>}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="title">Name</FormLabel>
            <Input
              id="title"
              {...register('title', {
                required: true,
                minLength: 2,
                maxLength: 20,
              })}
            />
            <ErrorMessage
              label="title"
              title="Name"
              requirmentsText="From 2 to 5 symbols"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              minH="160px"
              {...register('description', {
                maxLength: 200,
              })}
            />
            <ErrorMessage
              label="description"
              title="description"
              requirmentsText="Max 200 symbols"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="price">Price</FormLabel>
            <NumberInput defaultValue={0.01} min={0.01} max={50}>
              <NumberInputField
                id="price"
                {...register('price', {
                  required: true,
                  minLength: 0.01,
                  maxLength: 50,
                })}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <ErrorMessage label="price" title="Price" />
          </FormControl>
          <Button
            isLoading={submitLoading}
            loadingText="Submitting"
            type="submit"
            alignSelf="flex-end"
            variant="primary"
          >
            Create item
          </Button>
        </VStack>
      </Box>
    </InnerPageContainer>
  )
}

export default CreateBidPage
