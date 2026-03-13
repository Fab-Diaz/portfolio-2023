import { Box, Stack } from '@mui/material'
import { DescriptionSection, ImageSwiper } from '@/components'
export var CaseArtMobile = function (_a) {
  var images = _a.images,
    content = _a.content,
    model = _a.model,
    _b = _a.modelHeight,
    modelHeight = _b === void 0 ? '100%' : _b
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
