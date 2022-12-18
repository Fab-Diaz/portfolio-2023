import type { NextPage } from 'next'
import { Box, useMediaQuery } from '@mui/material'
import {
  DescriptionSection,
  ERROR_CONTENT,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'

const ErrorPage: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      <Box component="div" width={{ xs: '100%', md: '50%' }}>
        <DescriptionSection {...ERROR_CONTENT} />
      </Box>
    </GeneralContainer>
  )
}

export default ErrorPage
