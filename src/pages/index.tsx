import type { NextPage } from 'next'
import { Container } from '@mui/material'
import { Hero } from '@/components'

const Home: NextPage = () => (
  <Container
    disableGutters={true}
    sx={{
      paddingY: { xs: 5, md: 0 },
      bgcolor: '#191919',
      border: 'solid',
      minWidth: '100%',
      minHeight: { xs: '100vh', md: '100%' },
      height: { xs: '100vh', md: '100vh' },
      overflow: 'hidden',
    }}
  >
    <Hero />
  </Container>
)

export default Home
