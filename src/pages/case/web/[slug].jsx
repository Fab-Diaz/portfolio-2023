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
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
var Case = function () {
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var router = useRouter()
  var slug = router.query.slug
  var DEFAULT_IMAGE = {
    id: 1,
    link: 'cases/web/'.concat(slug, '/').concat(slug, '_1.png'),
  }
  var images = useState(
    __spreadArray(
      [DEFAULT_IMAGE],
      Array.from('x'.repeat(3)).map(function (_, i) {
        return {
          id: i + 2,
          link: 'cases/web/'
            .concat(slug, '/')
            .concat(slug, '_')
            .concat(i + 2, '.png'),
        }
      }),
      true,
    ),
  )[0]
  var _a = useState(DEFAULT_IMAGE),
    selectedImage = _a[0],
    setSelectedImage = _a[1]
  var _b = useState(DEFAULT_CONTENT),
    content = _b[0],
    setContent = _b[1]
  useEffect(
    function () {
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
    },
    [slug],
  )
  return (
    <GeneralContainer>
      {isTabletAndMobile ? <HeaderMobile /> : <Header />}
      {isTabletAndMobile ? (
        <CaseWebMobile
          images={images.map(function (_a) {
            var link = _a.link
            return link
          })}
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
