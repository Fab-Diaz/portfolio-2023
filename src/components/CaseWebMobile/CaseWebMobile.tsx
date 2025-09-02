import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageSwiper,
} from '@/components'

export type CaseWebMobileProps = {
  images: string[]
  content: DescriptionSectionProps
}

export const CaseWebMobile = ({
  images,
  content,
}: CaseWebMobileProps): JSX.Element => {
  return (
    <Stack direction="column" spacing={4} height="100%">
      <Box component="div" flex={40}>
        <DescriptionSection {...content} />
      </Box>
      <ImageSwiper images={images} objectFit="cover" height="45vh" />
    </Stack>
  )
}
