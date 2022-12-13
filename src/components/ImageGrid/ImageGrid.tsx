import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
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
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))
  const cols = isTabletAndMobile ? sizeXs : sizeMd

  return (
    <ImageList rowHeight={elementHeight ?? 150} cols={cols} variant={variant}>
      {images.map((image) => (
        <ImageListItem key={image} sx={{ p: { xs: 0, md: 4 } }}>
          <img
            src={`/static/images/${image}`}
            alt={image}
            style={{
              objectFit,
              objectPosition: 'center',
              width: '100%',
              height: '100%',
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
