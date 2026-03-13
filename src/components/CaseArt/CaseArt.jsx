import { Box, Stack } from '@mui/material'
import { DescriptionSection, ImageGrid } from '@/components'
export var CaseArt = function (_a) {
  var images = _a.images,
    content = _a.content,
    model = _a.model
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={10}>
      <Box component="div" flex={40} height="80%">
        <Stack direction="column" spacing={4}>
          <DescriptionSection {...content} />
          <ImageGrid images={images} sizeMd={2} elementHeight={220} />
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
}
