import { Box, Stack } from '@mui/material'
import {
  DescriptionSection,
  DescriptionSectionProps,
  ImageStack,
  ImageStackItem,
  ShowWeb,
} from '@/components'

export type CaseWebProps = {
  images: ImageStackItem[]
  selectedImage: ImageStackItem
  setSelectedImage: (image: ImageStackItem) => void
  content: DescriptionSectionProps
  slug: string
}

export const CaseWeb = ({
  images,
  selectedImage,
  setSelectedImage,
  content,
  slug,
}: CaseWebProps): JSX.Element => (
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
        {images.map((image) => (
          <ShowWeb
            key={`showWeb_${image.link}`}
            model={`Screen_${slug}_${image.id}.glb`}
            isShown={selectedImage === image}
          />
        ))}
      </Box>
    </Stack>
  </Stack>
)
