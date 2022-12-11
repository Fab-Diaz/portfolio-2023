import type { NextPage } from 'next'
import { Box, useMediaQuery } from '@mui/material'
import {
  CaseGrid,
  CaseGridItem,
  contentBusiness,
  DescriptionSection,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'

const Entrepreneur: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))

  const caseItems: CaseGridItem[] = [
    {
      image: 'business/plainshare/plainshare_1.png',
      title: 'Plainshare',
      link: '/case/business/plainshare',
    },
    {
      image: 'business/taalqafe/taalqafe_1.png',
      title: 'TaalQafe',
      link: '/case/business/taalqafe',
    },
    {
      image: 'business/bob/bob_1.png',
      title: 'Bob',
      link: '/case/business/bob',
    },
  ]

  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      <Box component="div" width={{ xs: '100%', md: '50%' }}>
        <DescriptionSection {...contentBusiness} />
      </Box>
      <Box component="div" sx={{ mt: 16 }}>
        <CaseGrid items={caseItems} />
      </Box>
    </GeneralContainer>
  )
}

export default Entrepreneur
