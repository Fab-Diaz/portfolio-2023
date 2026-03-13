import { useMediaQuery } from '@mui/material'
import {
  ContactBlock,
  contentContact,
  DEFAULT_CONTENT,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'
import { useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
var Contact = function () {
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var socialSize = isTabletAndMobile ? 'medium' : 'large'
  var images = Array.from('x'.repeat(9)).map(function (_, i) {
    return 'contact/contact_'.concat(i + 1, '.png')
  })
  var socials = [
    {
      icon: <LinkedInIcon color="primary" fontSize={socialSize} />,
      link: 'https://www.linkedin.com/in/fabien-diaz/',
    },
    {
      icon: <GitHubIcon color="primary" fontSize={socialSize} />,
      link: 'https://github.com/Fab-Diaz',
    },
  ]
  var _a = useState(DEFAULT_CONTENT),
    content = _a[0],
    setContent = _a[1]
  useEffect(function () {
    setContent(contentContact)
  }, [])
  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      <ContactBlock images={images} content={content} socials={socials} />
    </GeneralContainer>
  )
}
export default Contact
