import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageGrid,
} from '@/components'

export type CaseBusinessProps = {
  images: string[]
  content: DescriptionSectionProps
}

export const CaseBusiness = ({
  images,
  content,
}: CaseBusinessProps): JSX.Element => (
  <Stack direction={"row"} spacing={4} height="88%">
    <Box component="div" flex={50}>
      <DescriptionSection {...content} />
    </Box>
    <Box component="div" flex={50}>
      <ImageGrid images={images} sizeMd={6} />
    </Box>
  </Stack>
)
