import { Box, Stack } from '@mui/material'
import { DescriptionSection, ImageStack } from '@/components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export var CaseWeb = function (_a) {
  var _b, _c
  var images = _a.images,
    selectedImage = _a.selectedImage,
    setSelectedImage = _a.setSelectedImage,
    content = _a.content
  return (
    <Stack direction="column" spacing={4} height="88%">
      <ImageStack
        direction="row"
        images={images}
        selectedImage={selectedImage}
        onClick={function (selectedImage) {
          return setSelectedImage(selectedImage)
        }}
      />
      <Stack direction={{ xs: 'column', md: 'row' }} height="100%" spacing={10}>
        <Box component="div" flex={40}>
          <DescriptionSection {...content} />
        </Box>
        <Box component="div" flex={60}>
          <LazyLoadImage
            src={'/static/images/'.concat(
              (_b = images.find(function (image) {
                return image === selectedImage
              })) === null || _b === void 0
                ? void 0
                : _b.link,
            )}
            effect="blur"
            alt={
              (_c = images.find(function (image) {
                return image === selectedImage
              })) === null || _c === void 0
                ? void 0
                : _c.link
            }
            width="100%"
          />
        </Box>
      </Stack>
    </Stack>
  )
}
