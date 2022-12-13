import { Box, Button, Chip, Stack, Typography } from '@mui/material'

export type DescriptionSectionProps = {
  title: string
  subtitle?: string
  description: string
  buttonLink?: string
  buttonText?: string
  tags?: string[]
}

export const DescriptionSection = ({
  title,
  subtitle,
  description,
  buttonLink,
  buttonText,
  tags,
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
        <Stack direction="row" spacing={3} mb={4}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} />
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
          target="_blank"
          sx={{
            width: { xs: '200px', sm: '300px', md: 'fit-content' },
            mt: 8,
          }}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  )
}
