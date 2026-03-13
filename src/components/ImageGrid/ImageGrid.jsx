import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import theme from '@/styles/theme'
export var ImageGrid = function (_a) {
  var images = _a.images,
    _b = _a.sizeMd,
    sizeMd = _b === void 0 ? 4 : _b,
    _c = _a.sizeXs,
    sizeXs = _c === void 0 ? 12 : _c,
    elementHeight = _a.elementHeight,
    _d = _a.objectFit,
    objectFit = _d === void 0 ? 'cover' : _d,
    _e = _a.variant,
    variant = _e === void 0 ? 'standard' : _e
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var cols = isTabletAndMobile ? sizeXs : sizeMd
  return (
    <ImageList
      rowHeight={
        elementHeight !== null && elementHeight !== void 0 ? elementHeight : 150
      }
      cols={cols}
      variant={variant}
    >
      {images.map(function (image) {
        return (
          <ImageListItem key={image} sx={{ p: { xs: 0, md: 4 } }}>
            <LazyLoadImage
              effect="blur"
              src={'/static/images/'.concat(image)}
              alt={image}
              height="100%"
              width="100%"
              style={{
                objectFit: objectFit,
                objectPosition: 'center',
              }}
            />
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}
