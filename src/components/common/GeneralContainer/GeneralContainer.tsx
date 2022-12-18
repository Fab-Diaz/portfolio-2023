/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import { Container } from '@mui/material'

export type GeneralContainerProps = {
  children: ReactNode
}

export const GeneralContainer = ({
  children,
}: GeneralContainerProps): JSX.Element => (
  <Container
    disableGutters={true}
    sx={{
      px: { xs: 5, md: 10 },
      bgcolor: '#191919',
      border: 'solid',
      minWidth: '100%',
      minHeight: '100vh',
      height: '100%',
    }}
  >
    {children}
  </Container>
)
