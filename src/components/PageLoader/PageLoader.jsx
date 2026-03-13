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
import { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { keyframes } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import { styled } from '@mui/material/styles'
var closingContainerAnimation = keyframes(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  0% { height: 100% } \n  50% { height: 100% }\n  100% { height: 0 }\n',
      ],
      [
        '\n  0% { height: 100% } \n  50% { height: 100% }\n  100% { height: 0 }\n',
      ],
    )),
)
var fadeOutTextAnimation = keyframes(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  0% { opacity: 1; visibility: visible }\n  100% { opacity: 0; visibility: hidden }\n',
      ],
      [
        '\n  0% { opacity: 1; visibility: visible }\n  100% { opacity: 0; visibility: hidden }\n',
      ],
    )),
)
var StyledContainer = styled(Stack)(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  background: black;\n  animation-name: ',
        ';\n  animation-duration: 0.8s;\n  animation-delay: 1s;\n  animation-timing-function: ease-in;\n  animation-fill-mode: forwards;\n',
      ],
      [
        '\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  background: black;\n  animation-name: ',
        ';\n  animation-duration: 0.8s;\n  animation-delay: 1s;\n  animation-timing-function: ease-in;\n  animation-fill-mode: forwards;\n',
      ],
    )),
  closingContainerAnimation,
)
var StyledTextBox = styled(Box)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  animation-name: ',
        ';\n  animation-duration: 0.3s;\n  animation-delay: 0.8s;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n',
      ],
      [
        '\n  animation-name: ',
        ';\n  animation-duration: 0.3s;\n  animation-delay: 0.8s;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: forwards;\n',
      ],
    )),
  fadeOutTextAnimation,
)
export var PageLoader = function (_a) {
  var pageProps = _a.pageProps
  var _b = useState(false),
    isLoaded = _b[0],
    setIsLoaded = _b[1]
  var _c = useState(false),
    isRedirecting = _c[0],
    setIsRedirecting = _c[1]
  var _d = useState(''),
    sentence = _d[0],
    setSentence = _d[1]
  var router = useRouter()
  var sentences = [
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
    'Googling how to Google',
    'Waiting for Godot',
    'Debugging the debugger',
    "Reading 'LOADING...' tips",
    "Swingin' until midnight",
    'Improvising my life',
    'Singing in the shower',
    'Doing the Macarena',
    'Popping the bubble',
    'Dusting Stack Overflow',
    'Reading the README',
    'Tap dancing on the keyboard',
    'Stalking my boss',
  ]
  useEffect(
    function () {
      var _a, _b
      var redirect =
        (_b =
          (_a =
            pageProps === null || pageProps === void 0
              ? void 0
              : pageProps.redirects) === null || _a === void 0
            ? void 0
            : _a.find(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function (_a) {
                  var old_path = _a.old_path
                  return old_path === router.asPath
                },
              )) !== null && _b !== void 0
          ? _b
          : null
      if (redirect) {
        if (redirect.is_permanent) {
          router.replace(redirect.link)
        } else {
          router.push(redirect.link)
        }
        setIsRedirecting(true)
      } else if (!redirect || isRedirecting) {
        setIsLoaded(true)
        setSentence(
          ''.concat(
            sentences[Math.floor(Math.random() * sentences.length)],
            '..',
          ),
        )
        setIsRedirecting(false)
      }
    },
    [router],
  )
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4
