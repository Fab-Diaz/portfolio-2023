import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageSwiper,
} from '@/components'

export type CaseArtMobileProps = {
  images: string[]
  content: DescriptionSectionProps
  model: JSX.Element
  modelHeight?: string
}

export const CaseArtMobile = ({
  images,
  content,
  model,
  modelHeight = '100%',
}: CaseArtMobileProps): JSX.Element => {
  return (
    <Stack direction="column" spacing={4} height="100%">
      <Box component="div">
        <DescriptionSection {...content} />
      </Box>
      <ImageSwiper images={images} objectFit="cover" height="45vh" />
      <Stack height={modelHeight} mx="-20px !important" my={0}>
        {model}
      </Stack>
    </Stack>
  )
}
