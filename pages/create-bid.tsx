import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
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
  requirements?: string
}

const CreateBidPage = () => {
  const [uploadedFile, setUploadedFile] = useState<any>(null)
  const [submitLoading, setSubmitLoading] = useState<boolean>(false)

  const toast = useToast()

  const {
    register,
    clearErrors,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>()

  const { fileRejections, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'image/jpeg, image/jpg, image/png, image/gif, .svg, image/webp',
    maxSize: 104857600,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      const preview = URL?.createObjectURL(file)
      if (!!file) {
        setUploadedFile(Object.assign(file, { preview }))

        setValue('image', preview)

        clearErrors(['image'])
      }
    },
  })

  const ErrorMessage = ({
    label,
    title,
    requirements: requirements,
  }: ErrorValues) => {
    //@ts-ignore
    const errorType = errors && errors[label]?.type
    if (errorType === 'required')
      return <FormErrorMessage>{title} is required</FormErrorMessage>
    if (errorType === 'minLength')
      return (
        <FormErrorMessage>Too short {label.toLowerCase()}</FormErrorMessage>
      )
    if (errorType === 'maxLength')
      return <FormErrorMessage>Too long {label.toLowerCase()}</FormErrorMessage>
    else return <FormHelperText>{requirements}</FormHelperText>
  }

  const loadedFileErrors =
    fileRejections &&
    fileRejections[0]?.errors?.map((error, i) => (
      <FormErrorMessage key={i}>{error.message}</FormErrorMessage>
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
    setValue('image', '')
    setValue('title', '')
    setUploadedFile(null)
    //console.log(formState)
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
          <FormControl isInvalid={!!errors.image}>
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

            <ErrorMessage label="image" title="Image" requirements="" />
          </FormControl>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="title">Name</FormLabel>
            <Input
              id="title"
              {...register('title', {
                required: true,
                minLength: 2,
                maxLength: 50,
              })}
            />
            <ErrorMessage
              label="title"
              title="Name"
              requirements="2-20 symbols"
            />
          </FormControl>
          <FormControl isInvalid={!!errors.description}>
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
              title="Description"
              requirements="Maximum 200 symbols"
            />
          </FormControl>
          <FormControl isInvalid={!!errors.price}>
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
            <ErrorMessage
              label="price"
              title="Price"
              requirements="0.01-50 ETH"
            />
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
