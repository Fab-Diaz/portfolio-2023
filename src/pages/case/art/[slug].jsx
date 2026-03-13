var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
import { useMediaQuery } from '@mui/material'
import {
  CaseArt,
  CaseArtMobile,
  contentDungeon,
  contentLamp,
  contentOffice,
  DEFAULT_CONTENT,
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
var Case = function () {
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var router = useRouter()
  var slug = router.query.slug
  var DEFAULT_IMAGE = 'cases/art/'.concat(slug, '/').concat(slug, '_1.png')
  var ModelOffice = (
    <ModelViewer
      scale={1}
      movement="fixed"
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
      orbits={{
        minAzimuthAngle: 1.5,
        maxAzimuthAngle: 3.5,
        minPolarAngle: 0.4,
        maxPolarAngle: 1.4,
      }}
      ambientLights={[{ intensity: 0.6 }]}
    />
  )
  var ModelDungeon = (
    <ModelViewer
      scale={1}
      movement="fixed"
      modelPath="/static/models/Small_Dungeon.glb"
      camera={{ position: [11, 8, 10] }}
      orbits={{
        minAzimuthAngle: -0.3,
        maxAzimuthAngle: 1.8,
        minPolarAngle: 0.4,
        maxPolarAngle: 1.4,
      }}
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
  var VideoLamp = <Video link="/static/videos/lamp.mp4" />
  var images = useState(
    __spreadArray(
      [DEFAULT_IMAGE],
      Array.from('x'.repeat(3)).map(function (_, i) {
        return 'cases/art/'
          .concat(slug, '/')
          .concat(slug, '_')
          .concat(i + 2, '.png')
      }),
      true,
    ),
  )[0]
  var _a = useState(<Loader />),
    model = _a[0],
    setModel = _a[1]
  var _b = useState(DEFAULT_CONTENT),
    content = _b[0],
    setContent = _b[1]
  useEffect(function () {
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
