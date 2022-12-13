import { Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageSwiper,
} from '@/components'

export type CaseBusinessMobileProps = {
  images: string[]
  content: DescriptionSectionProps
}

export const CaseBusinessMobile = ({
  images,
  content,
}: CaseBusinessMobileProps): JSX.Element => (
  <Stack direction="column" spacing={4} height="88%">
    <DescriptionSection {...content} />
    <ImageSwiper images={images} objectFit="cover" height="45vh" />
  </Stack>
)
