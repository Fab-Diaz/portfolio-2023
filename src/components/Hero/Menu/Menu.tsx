import { Box, Button, Stack } from '@mui/material'
import { keyframes } from '@emotion/react'
import { DelayedLink, headerItems } from '@/components'

const fadeInAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

export const HeroMenu = (): JSX.Element => {
  return (
    <Stack
      spacing={4}
      direction={{ xs: 'row', md: 'column' }}
      flexWrap="nowrap"
      sx={{
        overflowX: 'auto',
        marginBottom: 5,
        paddingBottom: 5,
        animationName: `${fadeInAnimation}`,
        animationDuration: '0.5s',
        animationDelay: '3.7s',
        animationFillMode: 'forwards',
        opacity: 0,
      }}
    >
      {headerItems.map(({ text, variant, link }) => (
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
      ))}
    </Stack>
  )
}
