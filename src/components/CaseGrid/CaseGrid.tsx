import { Box, Grid, Stack, Typography } from '@mui/material'
import { DelayedLink } from '@/components'

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
              <Box component="div" height="40vh" width="100%">
                <img
                  src={`/static/images/cases/${image}`}
                  alt={title}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
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
