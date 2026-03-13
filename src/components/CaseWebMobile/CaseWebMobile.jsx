import { Box, Stack } from '@mui/material'
import { DescriptionSection, ImageSwiper } from '@/components'
export var CaseWebMobile = function (_a) {
  var images = _a.images,
    content = _a.content
  return (
    <Stack direction="column" spacing={4} height="100%">
      <Box component="div" flex={40}>
        <DescriptionSection {...content} />
      </Box>
      <ImageSwiper images={images} objectFit="cover" height="45vh" />
    </Stack>
  )
}
