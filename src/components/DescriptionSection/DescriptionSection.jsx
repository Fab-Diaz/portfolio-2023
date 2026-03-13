import { Alert, Box, Button, Chip, Stack, Typography } from '@mui/material'
export var DescriptionSection = function (_a) {
  var title = _a.title,
    subtitle = _a.subtitle,
    description = _a.description,
    buttonLink = _a.buttonLink,
    buttonText = _a.buttonText,
    _b = _a.buttonTarget,
    buttonTarget = _b === void 0 ? '_blank' : _b,
    tags = _a.tags,
    warning = _a.warning
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
          {tags.map(function (tag) {
            return <Chip key={tag} label={tag} sx={{ mb: 4, mr: 2 }} />
          })}
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
            my: 8,
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
            my: 8,
            color: 'primary.main',
          }}
        >
          {warning}
        </Alert>
      )}
    </Box>
  )
}
