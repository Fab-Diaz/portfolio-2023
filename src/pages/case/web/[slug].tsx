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
  contentFlorbs,
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

  const [hasModel, setHasModel] = useState<boolean>(true)

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
        setHasModel(false)
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
          hasModel={hasModel}
        />
      ) : (
        <CaseWeb
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          content={content}
          slug={slug as string}
          hasModel={hasModel}
        />
      )}
    </GeneralContainer>
  )
}

export default Case
