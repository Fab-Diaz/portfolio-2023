var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import { useMediaQuery } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import theme, { defaultFont, headerFont } from '@/styles/theme'
export var HeroTitle = function () {
  var isTabletAndMobile = useMediaQuery(theme.breakpoints.down('lg'))
  var styledTitle = isTabletAndMobile
    ? {
        fontSize: '2.4rem',
        wordSpacing: '2.5rem',
        lineHeight: '2.4rem',
      }
    : {
        fontSize: '4rem',
        wordSpacing: '1rem',
        lineHeight: '4rem',
      }
  var styledSubTitle = isTabletAndMobile
    ? {
        fontSize: '1.5rem',
        lineHeight: '0.75rem',
      }
    : {
        fontSize: '2rem',
        lineHeight: '1.5rem',
      }
  return (
    <>
      <TypeAnimation
        sequence={[1200, 'How to be more than a developer']}
        wrapper="div"
        cursor={true}
        style={__assign(
          { fontFamily: headerFont, color: theme.palette.primary.main },
          styledTitle,
        )}
      />
      <TypeAnimation
        sequence={[3700, 'A portfolio by Fabien Diaz']}
        wrapper="div"
        cursor={false}
        style={__assign(
          { fontFamily: defaultFont, color: 'white' },
          styledSubTitle,
        )}
      />
    </>
  )
}
