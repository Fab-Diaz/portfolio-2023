import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageGrid,
} from '@/components'

export type CaseArtProps = {
  images: string[]
  content: DescriptionSectionProps
  model: JSX.Element
}

export const CaseArt = ({
  images,
  content,
  model,
}: CaseArtProps): JSX.Element => (
  <Stack direction={{ xs: 'column', md: 'row' }} spacing={10}>
    <Box component="div" flex={40} height="80%">
      <Stack direction="column" spacing={4}>
        <DescriptionSection {...content} />
        <ImageGrid images={images} sizeMd={6} />
      </Stack>
    </Box>
    <Stack
      flex={60}
      height="82vh"
      justifyContent="flex-end"
      sx={{ cursor: 'grab' }}
    >
      {model}
    </Stack>
  </Stack>
)
