import { Box, Stack } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export var ImageStack = function (_a) {
  var images = _a.images,
    direction = _a.direction,
    selectedImage = _a.selectedImage,
    onClick = _a.onClick,
    _b = _a.height,
    height = _b === void 0 ? '20vh' : _b,
    _c = _a.objectFit,
    objectFit = _c === void 0 ? 'cover' : _c
  return (
    <Stack direction={direction}>
      {images.map(function (image) {
        var link = image.link
        return (
          <Box
            component="div"
            key={link}
            height={height}
            width="100%"
            marginX={direction === 'row' ? 2 : 0}
            marginY={direction === 'column' ? 2 : 0}
            onClick={function () {
              return onClick && onClick(image)
            }}
            sx={{
              opacity: !selectedImage || selectedImage === image ? 1 : 0.3,
              cursor: 'pointer',
            }}
          >
            <LazyLoadImage
              src={'/static/images/'.concat(link)}
              effect="blur"
              alt={link}
              width="100%"
              height={height}
              style={{
                objectFit: objectFit,
                height: height,
              }}
            />
          </Box>
        )
      })}
    </Stack>
  )
}
