import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'
import {
  CaseBusiness,
  CaseBusinessMobile,
  contentBob,
  contentPlainshare,
  contentTaalqafe,
  DEFAULT_CONTENT,
  DescriptionSectionProps,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

const Case: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))

  const router = useRouter()

  const slug = router.query.slug

  const DEFAULT_IMAGE = `cases/business/${slug}/${slug}_1.png`

  const [images] = useState<string[]>([
    DEFAULT_IMAGE,
    `cases/business/${slug}/${slug}_2.png`,
    `cases/business/${slug}/${slug}_3.png`,
    `cases/business/${slug}/${slug}_4.png`,
    `cases/business/${slug}/${slug}_5.png`,
    `cases/business/${slug}/${slug}_6.png`,
  ])

  const [content, setContent] =
    useState<DescriptionSectionProps>(DEFAULT_CONTENT)

  useEffect(() => {
    switch (slug) {
      case 'plainshare':
        setContent(contentPlainshare)
        break
      case 'taalqafe':
        setContent(contentTaalqafe)
        break
      case 'bob':
        setContent(contentBob)
        break
    }
  }, [])

  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      {isTabletAndMobile ? (
        <CaseBusinessMobile images={images} content={content} />
      ) : (
        <CaseBusiness images={images} content={content} />
      )}
    </GeneralContainer>
  )
}

export default Case
