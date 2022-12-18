import { Box, Stack } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export type ImageStackItem = {
  id: number
  link: string
}

export type ImageStackProps = {
  images: ImageStackItem[]
  direction: 'row' | 'column'
  selectedImage?: ImageStackItem
  onClick?: (selectedImage: ImageStackItem) => void
  height?: string
  objectFit?: 'cover' | 'contain'
}

export const ImageStack = ({
  images,
  direction,
  selectedImage,
  onClick,
  height = '20vh',
  objectFit = 'cover',
}: ImageStackProps): JSX.Element => (
  <Stack direction={direction}>
    {images.map((image) => {
      const { link } = image

      return (
        <Box
          component="div"
          key={link}
          height={height}
          width="100%"
          marginX={direction === 'row' ? 2 : 0}
          marginY={direction === 'column' ? 2 : 0}
          onClick={() => onClick && onClick(image)}
          sx={{
            opacity: !selectedImage || selectedImage === image ? 1 : 0.3,
            cursor: 'pointer',
          }}
        >
          <LazyLoadImage
            src={`/static/images/${link}`}
            effect="blur"
            alt={link}
            width="100%"
            height={height}
            style={{
              objectFit,
              height,
            }}
          />
        </Box>
      )
    })}
  </Stack>
)
