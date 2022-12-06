import { ReactElement, useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { keyframes } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import { styled } from '@mui/material/styles'

export type PageLoaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
}

const closingContainerAnimation = keyframes`
  0% { height: 100% } 
  50% { height: 100% }
  100% { height: 0 }
`

const fadeOutTextAnimation = keyframes`
  0% { opacity: 1; visibility: visible }
  100% { opacity: 0; visibility: hidden }
`

const StyledContainer = styled(Stack)`
  position: fixed;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: black;
  animation-name: ${closingContainerAnimation};
  animation-duration: 0.8s;
  animation-delay: 1s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`

const StyledTextBox = styled(Box)`
  animation-name: ${fadeOutTextAnimation};
  animation-duration: 0.3s;
  animation-delay: 0.8s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`

export const PageLoader = ({
  pageProps,
}: PageLoaderProps): ReactElement<unknown> => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [sentence, setSentence] = useState('')
  const router = useRouter()

  const sentences = [
    'Drawing pixels one by one',
    'Calling Bill Gates',
    'Checking COVID-19 statistics',
    'Reaching the 100th pushup',
    'Coding an infinite loop',
    'Cleaning harmless malwares',
    'Welcoming the world',
    'Getting ready for Christmas',
    'Driving 88mph',
    'Blending a croissant',
    'Running after goats',
    'Shaking a bubble tea',
    'Buying toilet paper',
    'Robbing a bank',
    'Talking to parrots',
    'Hunting aliens',
    "Buying NFT's",
    'Sketching the page',
  ]

  useEffect(() => {
    const redirect =
      pageProps?.redirects?.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ({ old_path }: any) => old_path === router.asPath
      ) ?? null

    if (redirect) {
      redirect.is_permanent
        ? router.replace(redirect.link)
        : router.push(redirect.link)
      setIsRedirecting(true)
    } else if (!redirect || isRedirecting) {
      setIsLoaded(true)
      setSentence(
        `${sentences[Math.floor(Math.random() * sentences.length)]}..`
      )
      setIsRedirecting(false)
    }
  }, [router])

  return !isLoaded ? (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100vh',
        zIndex: 1000,
      }}
    >
      <h1>👋</h1>
    </div>
  ) : (
    <StyledContainer>
      <StyledTextBox>
        <Typography variant="h1" color="primary.main" textAlign="center">
          👋
        </Typography>
        <Typography variant="h2" color="primary.main" textAlign="center">
          {sentence}
        </Typography>
      </StyledTextBox>
    </StyledContainer>
  )
}
