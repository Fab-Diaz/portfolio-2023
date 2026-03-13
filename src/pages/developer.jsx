import { Box, useMediaQuery } from '@mui/material'
import {
  CaseGrid,
  contentWeb,
  DescriptionSection,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'
var Developer = function () {
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var caseItems = [
    {
      image: 'web/gassan/gassan_1.png',
      title: 'Gassan',
      link: '/case/web/gassan',
    },
    {
      image: 'web/financial-lease/financial-lease_1.png',
      title: 'Financial Lease',
      link: '/case/web/financial-lease',
    },
    {
      image: 'web/dimpr/dimpr_1.png',
      title: 'Dimpr',
      link: '/case/web/dimpr',
    },
    {
      image: 'web/geniebi/geniebi_1.png',
      title: 'Geniebi',
      link: '/case/web/geniebi',
    },
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
      image: 'web/florbs/florbs_1.png',
      title: 'Florbs',
      link: '/case/web/florbs',
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
    {
      image: 'web/improv-utrecht/improv-utrecht_1.png',
      title: 'Improv Utrecht',
      link: '/case/web/improv-utrecht',
    },
  ]
  return (
    <GeneralContainer>
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
