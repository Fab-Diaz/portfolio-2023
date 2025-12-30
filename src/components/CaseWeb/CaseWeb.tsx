import { ReactElement } from 'react'
import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageStack,
  ImageStackItem,
} from '@/components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export type CaseWebProps = {
  images: ImageStackItem[]
  selectedImage: ImageStackItem
  setSelectedImage: (image: ImageStackItem) => void
  content: DescriptionSectionProps
}

export const CaseWeb = ({
  images,
  selectedImage,
  setSelectedImage,
  content,
}: CaseWebProps): ReactElement => (
  <Stack direction="column" spacing={4} height="88%">
    <ImageStack
      direction="row"
      images={images}
      selectedImage={selectedImage}
      onClick={(selectedImage) => setSelectedImage(selectedImage)}
    />
    <Stack direction={{ xs: 'column', md: 'row' }} height="100%" spacing={10}>
      <Box component="div" flex={40}>
        <DescriptionSection {...content} />
      </Box>
      <Box component="div" flex={60}>
        <LazyLoadImage
          src={`/static/images/${
            images.find((image) => image === selectedImage)?.link
          }`}
          effect="blur"
          alt={images.find((image) => image === selectedImage)?.link}
          width="100%"
        />
      </Box>
    </Stack>
  </Stack>
)
