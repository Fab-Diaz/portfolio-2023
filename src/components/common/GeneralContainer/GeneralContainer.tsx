import { ReactNode } from 'react'
import { Container } from '@mui/material'

export type GeneralContainerProps = {
  children: ReactNode
  minHeight?: unknown
  height?: unknown
}

export const GeneralContainer = ({
  children,
  minHeight = { xs: '100vh', md: '100%' },
  height = { xs: '100%', md: '100vh' },
}: GeneralContainerProps): JSX.Element => (
  <Container
    disableGutters={true}
    sx={{
      px: { xs: 5, md: 10 },
      bgcolor: '#191919',
      border: 'solid',
      minWidth: '100%',
      minHeight,
      height,
    }}
  >
    {children}
  </Container>
)
