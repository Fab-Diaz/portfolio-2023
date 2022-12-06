import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'
import {
  CaseWeb,
  CaseWebMobile,
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
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))

  const router = useRouter()

  const slug = router.query.slug

  const DEFAULT_IMAGE: ImageStackItem = {
    id: 1,
    link: `cases/web/${slug}/${slug}_1.png`,
  }

  const [images] = useState<ImageStackItem[]>([
    DEFAULT_IMAGE,
    { id: 2, link: `cases/web/${slug}/${slug}_2.png` },
    { id: 3, link: `cases/web/${slug}/${slug}_3.png` },
    { id: 4, link: `cases/web/${slug}/${slug}_4.png` },
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
    }
  }, [])

  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      {isTabletAndMobile ? (
        <CaseWebMobile
          images={images.map(({ link }) => link)}
          content={content}
          slug={slug as string}
        />
      ) : (
        <CaseWeb
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          content={content}
          slug={slug as string}
        />
      )}
    </GeneralContainer>
  )
}

export default Case
