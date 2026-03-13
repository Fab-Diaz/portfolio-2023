import { useMediaQuery } from '@mui/material'
import {
  CaseBusiness,
  CaseBusinessMobile,
  contentBob,
  contentLooparity,
  contentPlainshare,
  contentTaalqafe,
  DEFAULT_CONTENT,
  GeneralContainer,
  Header,
  HeaderMobile,
} from '@/components'
import theme from '@/styles/theme'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useMemo, useState } from 'react'
var Case = function () {
  var _a
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var router = useRouter()
  var slug = router.query.slug
  var imageCountBySlug = {
    looparity: 3,
  }
  var imageCount = slug
    ? (_a = imageCountBySlug[slug]) !== null && _a !== void 0
      ? _a
      : 6
    : 6
  var images = useMemo(
    function () {
      return slug
        ? Array.from({ length: imageCount }, function (_, i) {
            return 'cases/business/'
              .concat(slug, '/')
              .concat(slug, '_')
              .concat(i + 1, '.png')
          })
        : []
    },
    [slug, imageCount],
  )
  var _b = useState(DEFAULT_CONTENT),
    content = _b[0],
    setContent = _b[1]
  useEffect(
    function () {
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
    },
    [slug],
  )
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
