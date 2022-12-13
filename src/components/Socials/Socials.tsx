import { Button, Link, Stack } from '@mui/material'
import { Social } from '@/components'

export type SocialsProps = {
  email: string
  socials: Social[]
}

export const Socials = ({ email, socials }: SocialsProps): JSX.Element => (
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    spacing={4}
    alignItems="center"
  >
    <Button variant="contained" href={'mailto:' + email} fullWidth={true}>
      Send me an email
    </Button>
    <Stack direction="row" spacing={4} alignItems="center">
      {socials.map(({ icon, link }) => (
        <Link href={link} key={link} target="_blank">
          {icon}
        </Link>
      ))}
    </Stack>
  </Stack>
)
