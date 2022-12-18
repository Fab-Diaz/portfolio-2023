import { Alert, Box, Button, Chip, Stack, Typography } from '@mui/material'

export type DescriptionSectionProps = {
  title: string
  subtitle?: string
  description: string
  buttonLink?: string
  buttonText?: string
  buttonTarget?: string
  tags?: string[]
  warning?: string
}

export const DescriptionSection = ({
  title,
  subtitle,
  description,
  buttonLink,
  buttonText,
  buttonTarget = '_blank',
  tags,
  warning,
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
      {tags && (
        <Stack direction="row" flexWrap="wrap">
          {tags.map((tag) => (
            <Chip key={tag} label={tag} sx={{ mb: 4, mr: 2 }} />
          ))}
        </Stack>
      )}
      <Typography variant="body1" color="white">
        {description}
      </Typography>
      {buttonLink && buttonText && (
        <Button
          variant="contained"
          href={buttonLink}
          target={buttonTarget}
          sx={{
            width: { xs: '100%', sm: '300px', md: 'fit-content' },
            mt: 8,
          }}
        >
          {buttonText}
        </Button>
      )}
      {warning && (
        <Alert
          severity="warning"
          variant="outlined"
          sx={{
            width: { xs: '100%', md: 'fit-content' },
            mt: 4,
            color: 'primary.main',
          }}
        >
          {warning}
        </Alert>
      )}
    </Box>
  )
}
