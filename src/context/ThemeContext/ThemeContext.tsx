import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

type IThemeContext = {
  children: ReactNode
  theme: Theme
}

const ThemeContext = ({ children, theme }: IThemeContext): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst={true}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeContext
