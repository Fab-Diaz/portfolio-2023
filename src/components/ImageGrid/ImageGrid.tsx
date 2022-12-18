import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import theme from '@/styles/theme'

export type ImageGridProps = {
  images: string[]
  sizeMd?: number
  sizeXs?: number
  elementHeight?: number
  objectFit?: 'cover' | 'contain'
  variant?: 'standard' | 'masonry' | 'quilted' | 'woven'
}

export const ImageGrid = ({
  images,
  sizeMd = 4,
  sizeXs = 12,
  elementHeight,
  objectFit = 'cover',
  variant = 'standard',
}: ImageGridProps): JSX.Element => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  const cols = isTabletAndMobile ? sizeXs : sizeMd

  return (
    <ImageList rowHeight={elementHeight ?? 150} cols={cols} variant={variant}>
      {images.map((image) => (
        <ImageListItem key={image} sx={{ p: { xs: 0, md: 4 } }}>
          <LazyLoadImage
            effect="blur"
            src={`/static/images/${image}`}
            alt={image}
            height="100%"
            width="100%"
            style={{
              objectFit,
              objectPosition: 'center',
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
