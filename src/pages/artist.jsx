import { Box, useMediaQuery } from '@mui/material'
import {
  CaseGrid,
  contentArt,
  DescriptionSection,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'
var Artist = function () {
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var caseItems = [
    {
      image: 'art/office/office_1.png',
      title: 'Office',
      link: '/case/art/office',
    },
    {
      image: 'art/dungeon/dungeon_1.png',
      title: 'Dungeon',
      link: '/case/art/dungeon',
    },
    {
      image: 'art/lamp/lamp_1.png',
      title: 'Pixar Lamp',
      link: '/case/art/lamp',
    },
  ]
  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      <Box component="div" width={{ xs: '100%', md: '50%' }}>
        <DescriptionSection {...contentArt} />
      </Box>
      <Box component="div" sx={{ mt: 16 }}>
        <CaseGrid items={caseItems} />
      </Box>
    </GeneralContainer>
  )
}
export default Artist
