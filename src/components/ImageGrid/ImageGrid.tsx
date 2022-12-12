import { Grid } from '@mui/material'

export type ImageGridProps = {
  images: string[]
  sizeMd?: number
  sizeXs?: number
  elementHeight?: string
  objectFit?: 'cover' | 'contain'
}

export const ImageGrid = ({
  images,
  sizeMd = 4,
  sizeXs = 12,
  elementHeight,
  objectFit = 'cover',
}: ImageGridProps): JSX.Element => (
  <Grid container={true}>
    {images.map((image) => (
      <Grid
        key={image}
        item={true}
        xs={sizeXs}
        md={sizeMd}
        width="100%"
        height={elementHeight}
        sx={{ p: { xs: 0, md: 4 } }}
      >
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
      </Grid>
    ))}
  </Grid>
)
