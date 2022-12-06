import { Box, Stack, Typography } from '@mui/material'

export type DescriptionSectionProps = {
  title: string
  subtitle?: string
  description: string
}

export const DescriptionSection = ({
  title,
  subtitle,
  description,
}: DescriptionSectionProps): JSX.Element => {
  return (
    <Box component="div">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Typography
          variant="h1"
          color="primary.main"
          order={{ xs: 2, md: 1 }}
          sx={{ wordWrap: 'break-word' }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h2" color="white" order={{ xs: 1, md: 2 }}>
            {subtitle}
          </Typography>
        )}
      </Stack>
      <Typography variant="body1" color="white">
        {description}
      </Typography>
    </Box>
  )
}
