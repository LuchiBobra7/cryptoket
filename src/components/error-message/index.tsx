import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const ErrorMessage = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error message</AlertTitle>
      <AlertDescription>Error info</AlertDescription>
    </Alert>
  )
}

export default ErrorMessage
