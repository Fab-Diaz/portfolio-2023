import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'
import {
  CaseWeb,
  CaseWebMobile,
  contentDimpr,
  contentFlorbs,
  contentFinancialLease,
  contentGeniebi,
  contentGassan,
  contentImprovUtrecht,
  contentQandidates,
  contentRampage,
  contentRebels,
  contentRobidus,
  contentVloto,
  DEFAULT_CONTENT,
  DescriptionSectionProps,
  GeneralContainer,
  Header,
  HeaderMobile,
  ImageStackItem,
} from '@/components'
import { getCaseImageCount } from '@/config/caseImageCounts'
import theme from '@/styles/theme'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useMemo, useState } from 'react'

const Case: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const router = useRouter()

  const slug = router.query.slug
  const imageCount = slug ? getCaseImageCount('web', slug as string) : 0

  const images = useMemo<ImageStackItem[]>(
    () =>
      slug
        ? Array.from({ length: imageCount }, (_, i) => ({
            id: i + 1,
            link: `cases/web/${slug}/${slug}_${i + 1}.png`,
          }))
        : [],
    [slug, imageCount],
  )

  const [selectedImage, setSelectedImage] = useState<
    ImageStackItem | undefined
  >(undefined)

  useEffect(() => {
    if (images.length > 0) setSelectedImage(images[0])
  }, [images])

  const [content, setContent] =
    useState<DescriptionSectionProps>(DEFAULT_CONTENT)

  useEffect(() => {
    switch (slug) {
      case 'rampage':
        setContent(contentRampage)
        break
      case 'robidus':
        setContent(contentRobidus)
        break
      case 'vloto':
        setContent(contentVloto)
        break
      case 'qandidates':
        setContent(contentQandidates)
        break
      case 'rebels':
        setContent(contentRebels)
        break
      case 'florbs':
        setContent(contentFlorbs)
        break
      case 'financial-lease':
        setContent(contentFinancialLease)
        break
      case 'gassan':
        setContent(contentGassan)
        break
      case 'dimpr':
        setContent(contentDimpr)
        break
      case 'geniebi':
        setContent(contentGeniebi)
        break
      case 'improv-utrecht':
        setContent(contentImprovUtrecht)
        break
    }
  }, [slug])

  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      {isTabletAndMobile ? (
        <CaseWebMobile
          images={images.map(({ link }) => link)}
          content={content}
        />
      ) : images.length > 0 ? (
        <CaseWeb
          images={images}
          selectedImage={selectedImage ?? images[0]}
          setSelectedImage={setSelectedImage}
          content={content}
        />
      ) : null}
    </GeneralContainer>
  )
}

export default Case
