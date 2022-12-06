import type { NextPage } from 'next'
import { Box, useMediaQuery } from '@mui/material'
import {
  CaseGrid,
  CaseGridItem,
  contentWeb,
  DescriptionSection,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'

const Developer: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))

  const caseItems: CaseGridItem[] = [
    {
      image: 'web/rampage/rampage_1.png',
      title: 'Rampage',
      link: '/case/web/rampage',
    },
    {
      image: 'web/robidus/robidus_1.png',
      title: 'Robidus',
      link: '/case/web/robidus',
    },
    {
      image: 'web/vloto/vloto_1.png',
      title: 'Vloto',
      link: '/case/web/vloto',
    },
    {
      image: 'web/qandidates/qandidates_1.png',
      title: 'Qandidates',
      link: '/case/web/qandidates',
    },
    {
      image: 'web/rebels/rebels_1.png',
      title: 'Rebels',
      link: '/case/web/rebels',
    },
  ]

  return (
    <GeneralContainer height="100%" minHeight="100%">
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      <Box component="div" width={{ xs: '100%', md: '50%' }}>
        <DescriptionSection {...contentWeb} />
      </Box>
      <Box component="div" sx={{ mt: 16 }}>
        <CaseGrid items={caseItems} />
      </Box>
    </GeneralContainer>
  )
}

export default Developer
