import { Grid, Stack, Typography } from '@mui/material'
import { DelayedLink } from '@/components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export type CaseGridItem = {
  image: string
  link: string
  title: string
}

export type CaseGridProps = {
  items: CaseGridItem[]
}

export const CaseGrid = ({ items }: CaseGridProps): JSX.Element => {
  return (
    <Grid container={true}>
      {items.map(({ image, title, link }) => (
        <Grid
          key={title}
          item={true}
          xs={12}
          md={4}
          width="100%"
          sx={{ p: { xs: 0, md: 4 }, cursor: 'pointer' }}
        >
          <DelayedLink link={link}>
            <Stack height="100%">
              <LazyLoadImage
                effect="blur"
                src={`/static/images/cases/${image}`}
                alt={title}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '40vh',
                }}
              />
              <Typography variant="h2" color="primary.main" sx={{ my: 4 }}>
                {title}
              </Typography>
            </Stack>
          </DelayedLink>
        </Grid>
      ))}
    </Grid>
  )
}
