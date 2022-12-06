import type { NextPage } from 'next'
import { useMediaQuery } from '@mui/material'
import {
  CaseArt,
  CaseArtMobile,
  contentDungeon,
  contentLamp,
  contentOffice,
  DEFAULT_CONTENT,
  DescriptionSectionProps,
  GeneralContainer,
  Header,
  HeaderMobile,
  ModelViewer,
  Video,
} from '@/components'
import theme from '@/styles/theme'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { Loader } from '@react-three/drei'

const Case: NextPage = () => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))

  const router = useRouter()

  const slug = router.query.slug

  const DEFAULT_IMAGE = `cases/art/${slug}/${slug}_1.png`

  const ModelOffice = (
    <ModelViewer
      scale={1}
      modelPath="/static/models/Small_Office.glb"
      camera={{ position: [18, 12, -15] }}
      spotlights={[
        {
          position: [0.5, 10, -20],
          angle: 0.6,
          penumbra: 1,
          //helper: true,
        },
      ]}
      ambientLights={[{ intensity: 0.6 }]}
    />
  )

  const ModelDungeon = (
    <ModelViewer
      scale={1}
      modelPath="/static/models/Small_Dungeon.glb"
      camera={{ position: [11, 8, 10] }}
      pointLights={[
        {
          position: [2.0, 6, -7],
          color: 'yellow',
          intensity: 0.5,
        },
        {
          position: [-7, 6, -1],
          color: 'yellow',
          intensity: 0.5,
        },
      ]}
    />
  )

  const VideoLamp = <Video link="/static/videos/lamp.mp4" />

  const [images] = useState<string[]>([
    DEFAULT_IMAGE,
    `cases/art/${slug}/${slug}_2.png`,
    `cases/art/${slug}/${slug}_3.png`,
    `cases/art/${slug}/${slug}_4.png`,
  ])
  const [model, setModel] = useState<JSX.Element>(<Loader />)

  const [content, setContent] =
    useState<DescriptionSectionProps>(DEFAULT_CONTENT)

  useEffect(() => {
    switch (slug) {
      case 'office':
        setContent(contentOffice)
        setModel(ModelOffice)
        break
      case 'dungeon':
        setContent(contentDungeon)
        setModel(ModelDungeon)
        break
      case 'lamp':
        setContent(contentLamp)
        setModel(VideoLamp)
        break
    }
  }, [])

  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      {isTabletAndMobile ? (
        <CaseArtMobile
          images={images}
          content={content}
          model={model}
          modelHeight={slug !== 'lamp' ? '50vh' : '100%'}
        />
      ) : (
        <CaseArt images={images} content={content} model={model} />
      )}
    </GeneralContainer>
  )
}

export default Case
