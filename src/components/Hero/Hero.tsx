import { Stack } from '@mui/material'
import { HeroMenu, HeroModelMinimalist, HeroTitle } from '@/components'

export const Hero = (): JSX.Element => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      height="100%"
      alignItems="stretch"
    >
      <Stack
        component="div"
        height="100%"
        flex={40}
        px={{ xs: 5, md: 10 }}
        justifyContent={{ xs: 'flex-start', md: 'center' }}
        spacing={{ xs: 8, md: 12 }}
      >
        <HeroTitle />
        <HeroMenu />
      </Stack>
      <HeroModelMinimalist />
    </Stack>
  )
}
