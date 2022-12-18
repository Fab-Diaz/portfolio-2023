import { Alert, Box, Stack, useMediaQuery } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageGrid,
  ImageSwiper,
  Socials,
} from '@/components'
import theme from '@/styles/theme'

export type Social = {
  icon: JSX.Element
  link: string
}

export type ContactProps = {
  images: string[]
  socials: Social[]
  content: DescriptionSectionProps
}

export const ContactBlock = ({
  images,
  socials,
  content,
}: ContactProps): JSX.Element => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      height="88%"
      mb={6}
    >
      <Box component="div" flex={60}>
        {isTabletAndMobile ? (
          <ImageSwiper
            images={images}
            objectFit="cover"
            height="45vh"
            margin="0 -20px 40px -20px"
          />
        ) : (
          <ImageGrid images={images} sizeMd={3} elementHeight={250} />
        )}
      </Box>
      <Stack direction="column" height="100%" spacing={10} flex={40}>
        <DescriptionSection {...content} />
        <Alert
          severity="error"
          variant="filled"
          sx={{ width: { xs: '100%', md: 'fit-content' } }}
        >
          Not looking for a job at the moment
        </Alert>
        <Socials email="fabien@rebels.io" socials={socials} />
      </Stack>
    </Stack>
  )
}
