import { Box, Stack } from '@mui/material'
import { DescriptionSection, ImageGrid } from '@/components'
export var CaseBusiness = function (_a) {
  var images = _a.images,
    content = _a.content
  var isColumnLayout = images.length <= 3
  return (
    <Stack
      direction={isColumnLayout ? 'column' : 'row'}
      spacing={4}
      height={isColumnLayout ? 'fit-content' : '88%'}
    >
      <Box
        component="div"
        flex={isColumnLayout ? undefined : 30}
        {...(isColumnLayout && { sx: { width: '50%', maxWidth: '50vw' } })}
      >
        <DescriptionSection {...content} />
      </Box>
      <Box component="div" flex={isColumnLayout ? undefined : 70}>
        <ImageGrid images={images} sizeMd={3} elementHeight={370} />
      </Box>
    </Stack>
  )
}
