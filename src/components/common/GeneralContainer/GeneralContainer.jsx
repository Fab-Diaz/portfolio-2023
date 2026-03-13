import { Container } from '@mui/material'
export var GeneralContainer = function (_a) {
  var children = _a.children
  return (
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
}
