import { Button, Drawer, IconButton, Stack } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import { DelayedLink, headerItems } from '@/components'
import { useState } from 'react'

export const HeaderMobile = (): JSX.Element => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const list = (
    <Stack
      direction="column"
      spacing={4}
      alignItems="flex-end"
      sx={{ backgroundColor: 'secondary.main', padding: 5, height: '100%' }}
    >
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/static/images/close.svg" alt="Menu" />
      </IconButton>
      {headerItems.map(({ text, variant, link }) => (
        <DelayedLink key={text} link={link}>
          <Button
            variant={variant}
            disabled={link === router.asPath}
            sx={{
              fontSize: '1.4rem',
              px: 4,
              py: 2,
            }}
          >
            {text}
          </Button>
        </DelayedLink>
      ))}
    </Stack>
  )

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
            py: 2,
          }}
          onClick={() => router.back()}
        >
          🠔 Go home
        </Button>
      </DelayedLink>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/static/images/menu.svg" alt="Menu" />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        {list}
      </Drawer>
    </Stack>
  )
}
