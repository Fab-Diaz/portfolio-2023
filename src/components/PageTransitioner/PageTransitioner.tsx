import { ReactElement, useContext, useEffect } from 'react'
import { Stack } from '@mui/material'
import { keyframes } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { PageTransitionerContext } from '@/context'
import { useRouter } from 'next/dist/client/router'

const openingContainerAnimation = keyframes`
  0% { left: 0 } 
  100% { left: 100vw }
`

const closingContainerAnimation = keyframes`
  0% { width: 0 }
  100% { width: 100% }
`

const Default = `
position: fixed;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: black;
  animation-duration: 0.4s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  `
const Container = styled(Stack)`
  ${Default}
`

const StyledClosingContainer = styled(Stack)`
  ${Default};
  animation-name: ${closingContainerAnimation};
`

const StyledOpeningContainer = styled(Stack)`
  ${Default};
  animation-name: ${openingContainerAnimation};
`

export const PageTransitioner = (): ReactElement<unknown> => {
  const router = useRouter()
  const { target, transitionState, setTransitionState } = useContext(
    PageTransitionerContext
  )

  useEffect(() => {
    if (transitionState === 'awaiting' && router.asPath === target) {
      setTransitionState('opening')
      setTimeout(() => {
        setTransitionState('idle')
      }, 400)
    }
  }, [router.asPath])

  switch (transitionState) {
    case 'closing':
      return <StyledClosingContainer />
    case 'opening':
      return <StyledOpeningContainer />
    case 'awaiting':
      return <Container />
    default:
      return <></>
  }
}
