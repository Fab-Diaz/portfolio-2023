import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'
import {
  ContactBlock,
  contentContact,
  DEFAULT_CONTENT,
  DescriptionSectionProps,
  GeneralContainer,
  Header,
  HeaderMobile,
  Social,
} from '@/components'
import theme from '@/styles/theme'
import { useEffect, useState } from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Contact: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))
  const socialSize = isTabletAndMobile ? 'medium' : 'large'

  const images = Array.from('x'.repeat(9)).map(
    (_, i) => `contact/contact_${i + 1}.png`
  )

  const socials: Social[] = [
    {
      icon: <LinkedInIcon color="primary" fontSize={socialSize} />,
      link: 'https://www.linkedin.com/in/fabien-diaz/',
    },
    {
      icon: <GitHubIcon color="primary" fontSize={socialSize} />,
      link: 'https://github.com/Fab-Diaz',
    },
  ]

  const [content, setContent] =
    useState<DescriptionSectionProps>(DEFAULT_CONTENT)

  useEffect(() => {
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
