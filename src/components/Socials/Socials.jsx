import { Button, Link, Stack } from '@mui/material'
export var Socials = function (_a) {
  var email = _a.email,
    socials = _a.socials
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      alignItems="center"
    >
      <Button variant="contained" href={'mailto:' + email} fullWidth={true}>
        Send me an email
      </Button>
      <Stack direction="row" spacing={4} alignItems="center">
        {socials.map(function (_a) {
          var icon = _a.icon,
            link = _a.link
          return (
            <Link href={link} key={link} target="_blank">
              {icon}
            </Link>
          )
        })}
      </Stack>
    </Stack>
  )
}
