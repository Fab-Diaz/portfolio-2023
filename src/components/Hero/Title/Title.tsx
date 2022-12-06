import { useMediaQuery } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import theme, { defaultFont, headerFont } from '@/styles/theme'

export const HeroTitle = (): JSX.Element => {
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'))
  const styledTitle = isTabletAndMobile
    ? {
        fontSize: '2.4rem',
        wordSpacing: '2.5rem',
        lineHeight: '2.4rem',
      }
    : {
        fontSize: '4.5rem',
        wordSpacing: '1rem',
        lineHeight: '4.5rem',
      }

  const styledSubTitle = isTabletAndMobile
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
        style={{
          fontFamily: headerFont,
          color: theme.palette.primary.main,
          ...styledTitle,
        }}
      />
      <TypeAnimation
        sequence={[3700, 'A portfolio by Fabien Diaz']}
        wrapper="div"
        cursor={false}
        style={{
          fontFamily: defaultFont,
          color: 'white',
          ...styledSubTitle,
        }}
      />
    </>
  )
}
