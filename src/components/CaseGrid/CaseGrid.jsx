import { Grid, Stack, Typography } from '@mui/material'
import { DelayedLink } from '@/components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export var CaseGrid = function (_a) {
  var items = _a.items
  return (
    <Grid container={true}>
      {items.map(function (_a) {
        var image = _a.image,
          title = _a.title,
          link = _a.link
        return (
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
                  src={'/static/images/cases/'.concat(image)}
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
        )
      })}
    </Grid>
  )
}
