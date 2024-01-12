import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageSwiper,
  ShowMobile,
} from '@/components'

export type CaseWebMobileProps = {
  images: string[]
  content: DescriptionSectionProps
  slug: string
  hasModel: boolean
}

export const CaseWebMobile = ({
  images,
  content,
  slug,
  hasModel,
}: CaseWebMobileProps): JSX.Element => {
  return (
    <Stack direction="column" spacing={4} height="100%">
      <Box component="div" flex={40}>
        <DescriptionSection {...content} />
      </Box>
      <ImageSwiper images={images} objectFit="cover" height="45vh" />
      {hasModel && (
        <ShowMobile key={`showMobile_${slug}`} model={`Mobile_${slug}.glb`} />
      )}
    </Stack>
  )
}
