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
import theme from '@/styles/theme'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

const Case: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const router = useRouter()

  const slug = router.query.slug

  const DEFAULT_IMAGE: ImageStackItem = {
    id: 1,
    link: `cases/web/${slug}/${slug}_1.png`,
  }

  const [images] = useState<ImageStackItem[]>([
    DEFAULT_IMAGE,
    ...Array.from('x'.repeat(3)).map((_, i) => ({
      id: i + 2,
      link: `cases/web/${slug}/${slug}_${i + 2}.png`,
    })),
  ])

  const [selectedImage, setSelectedImage] =
    useState<ImageStackItem>(DEFAULT_IMAGE)

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
      ) : (
        <CaseWeb
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          content={content}
        />
      )}
    </GeneralContainer>
  )
}

export default Case
