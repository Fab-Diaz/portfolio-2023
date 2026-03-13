import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
var ThemeContext = function (_a) {
  var children = _a.children,
    theme = _a.theme
  return (
    <StyledEngineProvider injectFirst={true}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}
export default ThemeContext
