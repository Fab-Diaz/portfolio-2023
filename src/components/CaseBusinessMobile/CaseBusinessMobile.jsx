import { Stack } from '@mui/material'
import { DescriptionSection, ImageSwiper } from '@/components'
export var CaseBusinessMobile = function (_a) {
  var images = _a.images,
    content = _a.content
  return (
    <Stack direction="column" spacing={4} height="fit-content">
      <DescriptionSection {...content} />
      <ImageSwiper
        images={images}
        objectFit="cover"
        height="45vh"
        margin="40px -20px 0 -20px"
      />
    </Stack>
  )
}
