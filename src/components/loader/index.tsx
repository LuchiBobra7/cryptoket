import { useNProgress } from '@tanem/react-nprogress'
import { Box } from '@chakra-ui/react'

const Loading: React.FC<{ isRouteChanging: boolean }> = ({
  isRouteChanging,
}) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  })

  return (
    <Box
      opacity={isFinished ? 0 : 1}
      pointerEvents="none"
      transition={` opacity ${animationDuration}ms linear;`}
    >
      <Box
        value={(-1 + progress) * 100}
        background="redLinear"
        position="relative"
        top={0}
        left={0}
        h={0.5}
        mt={-0.5}
        width="full"
        marginLeft={`${(-1 + progress) * 100}%`}
        transition={`margin-left ${animationDuration}ms linear;`}
        zIndex={12}
      />
    </Box>
  )
}

export default Loading
