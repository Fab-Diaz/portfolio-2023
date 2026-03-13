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
import { Box, Button, Stack } from '@mui/material'
import { keyframes } from '@emotion/react'
import { DelayedLink, headerItems } from '@/components'
var fadeInAnimation = keyframes(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  0% { opacity: 0 }\n  100% { opacity: 1 }\n'],
      ['\n  0% { opacity: 0 }\n  100% { opacity: 1 }\n'],
    )),
)
export var HeroMenu = function () {
  return (
    <Stack
      spacing={4}
      direction={{ xs: 'row', md: 'column' }}
      flexWrap="nowrap"
      sx={{
        overflowX: 'auto',
        marginBottom: 5,
        paddingBottom: 5,
        animationName: ''.concat(fadeInAnimation),
        animationDuration: '0.5s',
        animationDelay: '3.7s',
        animationFillMode: 'forwards',
        opacity: 0,
      }}
    >
      {headerItems.map(function (_a) {
        var text = _a.text,
          variant = _a.variant,
          link = _a.link
        return (
          <Box component="div" key={text}>
            <DelayedLink link={link}>
              <Button
                variant={variant}
                sx={{ width: { xs: '200px', sm: '300px', md: 'fit-content' } }}
              >
                {text}
              </Button>
            </DelayedLink>
          </Box>
        )
      })}
    </Stack>
  )
}
var templateObject_1
