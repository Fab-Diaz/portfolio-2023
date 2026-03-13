import { Button, Stack } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import { DelayedLink } from '@/components'
export var headerItems = [
  {
    variant: 'contained',
    text: 'Be a Developer',
    link: '/developer',
  },
  {
    variant: 'contained',
    text: 'Be an Artist',
    link: '/artist',
  },
  {
    variant: 'contained',
    text: 'Be an Entrepreneur',
    link: '/entrepreneur',
  },
  {
    variant: 'text',
    text: 'Who am I?',
    link: '/contact',
  },
]
export var Header = function () {
  var router = useRouter()
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        marginY: 5,
        paddingBottom: 5,
      }}
    >
      <DelayedLink link="/">
        <Button
          variant="text"
          sx={{
            fontSize: '1.4rem',
            width: { xs: '200px', sm: '300px', md: 'fit-content' },
            px: 4,
            py: 2,
          }}
        >
          {'< Go home'}
        </Button>
      </DelayedLink>
      <Stack direction="row" spacing={4}>
        {headerItems.map(function (_a) {
          var text = _a.text,
            variant = _a.variant,
            link = _a.link
          return (
            <DelayedLink key={text} link={link}>
              <Button
                variant={variant}
                disabled={link === router.asPath}
                sx={{
                  fontSize: '1.4rem',
                  width: { xs: '200px', sm: '300px', md: 'fit-content' },
                  px: 4,
                  py: 2,
                }}
              >
                {text}
              </Button>
            </DelayedLink>
          )
        })}
      </Stack>
    </Stack>
  )
}
