import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'
import {
  CaseBusiness,
  CaseBusinessMobile,
  contentBob,
  contentLooparity,
  contentPlainshare,
  contentTaalqafe,
  DEFAULT_CONTENT,
  DescriptionSectionProps,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import { getCaseImageCount } from '@/config/caseImageCounts'
import theme from '@/styles/theme'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useMemo, useState } from 'react'

const Case: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const router = useRouter()

  const slug = router.query.slug
  const imageCount = slug ? getCaseImageCount('business', slug as string) : 0

  const images = useMemo(
    () =>
      slug
        ? Array.from(
            { length: imageCount },
            (_, i) => `cases/business/${slug}/${slug}_${i + 1}.png`,
          )
        : [],
    [slug, imageCount],
  )

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
      case 'looparity':
        setContent(contentLooparity)
        break
    }
  }, [slug])

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
