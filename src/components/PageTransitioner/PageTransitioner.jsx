var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
import { useContext, useEffect } from 'react'
import { Stack } from '@mui/material'
import { keyframes } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { PageTransitionerContext } from '@/context'
import { useRouter } from 'next/dist/client/router'
var openingContainerAnimation = keyframes(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  0% { left: 0 } \n  100% { left: 100vw }\n'],
      ['\n  0% { left: 0 } \n  100% { left: 100vw }\n'],
    )),
)
var closingContainerAnimation = keyframes(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  0% { width: 0 }\n  100% { width: 100% }\n'],
      ['\n  0% { width: 0 }\n  100% { width: 100% }\n'],
    )),
)
var Default =
  '\nposition: fixed;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  background: black;\n  animation-duration: 0.4s;\n  animation-timing-function: ease-in;\n  animation-fill-mode: forwards;\n  '
var Container = styled(Stack)(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
  Default,
)
var StyledClosingContainer = styled(Stack)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  ', ';\n  animation-name: ', ';\n'],
      ['\n  ', ';\n  animation-name: ', ';\n'],
    )),
  Default,
  closingContainerAnimation,
)
var StyledOpeningContainer = styled(Stack)(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  ', ';\n  animation-name: ', ';\n'],
      ['\n  ', ';\n  animation-name: ', ';\n'],
    )),
  Default,
  openingContainerAnimation,
)
export var PageTransitioner = function () {
  var router = useRouter()
  var _a = useContext(PageTransitionerContext),
    target = _a.target,
    transitionState = _a.transitionState,
    setTransitionState = _a.setTransitionState
  useEffect(
    function () {
      if (transitionState === 'awaiting' && router.asPath === target) {
        setTransitionState('opening')
        setTimeout(function () {
          setTransitionState('idle')
        }, 400)
      }
    },
    [router.asPath],
  )
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
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5
