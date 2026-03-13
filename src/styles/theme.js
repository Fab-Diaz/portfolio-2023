var _a, _b, _c, _d, _e
import { createTheme } from '@mui/material'
export var defaultFont = 'Actor'
export var titleFont = 'Secular One'
export var headerFont = 'Rubik Mono One'
var theme = createTheme({
  palette: {
    primary: {
      main: '#FFD52A',
    },
    secondary: {
      light: '#2f2f2f',
      main: '#191919',
      dark: '#161616',
    },
    error: {
      main: '#CE202F',
    },
    warning: {
      light: '#FFD789',
      main: '#F3BB1C',
      dark: '#E88400',
      contrastText: '#F8F9FA',
    },
    success: {
      light: '#16F16E',
      main: '#3CC13B',
      dark: '#128E44',
    },
    grey: {
      50: '#f9fafa',
      100: '#efefef',
      200: '#e6e6e6',
      300: '#C2C9D1',
      400: '#98A1AF',
      600: '#808080',
      700: '#666',
      900: '#393939',
      A100: '#F3F6FF',
    },
    text: {
      primary: '#191919',
      secondary: '#92979F',
    },
    background: {
      paper: '#fff',
      default: '#F4F6FA',
    },
  },
  spacing: 4,
})
theme.typography = {
  htmlFontSize: 10,
  fontFamily: defaultFont,
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSize: 1,
  pxToRem: function (size) {
    return ''.concat(size / 10, 'rem')
  },
  h1:
    ((_a = {
      fontFamily: headerFont,
      fontSize: '4.5rem',
    }),
    (_a[theme.breakpoints.down('sm')] = {
      fontSize: '3rem',
    }),
    _a),
  h2:
    ((_b = {
      fontFamily: titleFont,
      fontWeight: 700,
    }),
    (_b[theme.breakpoints.down('sm')] = {
      fontSize: '1.5rem',
    }),
    _b),
  h3: {
    fontFamily: titleFont,
  },
  h4: {},
  h5: {},
  h6: {},
  body1:
    ((_c = {
      fontFamily: defaultFont,
      fontWeight: 500,
      fontSize: '1.5rem',
    }),
    (_c[theme.breakpoints.down('sm')] = {
      fontSize: '1.2rem',
    }),
    _c),
  body2: {},
  subtitle1: {},
  subtitle2: {},
  caption: {},
  button: {},
  overline: {},
}
theme.components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      contained:
        ((_d = {
          backgroundColor: theme.palette.secondary.light,
          color: 'white',
          border: '1px solid transparent',
          borderRadius: '50px',
          fontSize: '1.6rem',
          lineHeight: '2.2rem',
          padding: '14px  40px',
          boxShadow: 'none',
          fontWeight: 500,
          textTransform: 'none',
          fontFamily: defaultFont,
        }),
        (_d[theme.breakpoints.down('lg')] = {
          fontSize: '1.2rem',
          padding: '7px 20px',
        }),
        (_d[':hover'] = {
          backgroundColor: theme.palette.secondary.light,
        }),
        (_d['&.Mui-disabled'] = {
          background: theme.palette.secondary.main,
          color: theme.palette.grey[600],
        }),
        _d),
      text:
        ((_e = {
          border: '1px solid transparent',
          borderRadius: '50px',
          fontSize: '1.6rem',
          lineHeight: '2.2rem',
          padding: '14px  40px',
          fontWeight: 500,
        }),
        (_e[theme.breakpoints.down('lg')] = {
          fontSize: '1.2rem',
          padding: '7px 20px',
        }),
        (_e[':hover'] = {
          border: '1px solid',
        }),
        _e),
    },
    variants: [
      {
        props: { variant: 'text' },
        style: {
          ':disabled': {
            color: theme.palette.primary.main,
            border: '1px solid '.concat(theme.palette.primary.main),
          },
        },
      },
    ],
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: defaultFont,
        fontSize: '1rem',
        padding: 4,
        background: ''.concat(theme.palette.secondary.light),
        color: ''.concat(theme.palette.common.white),
      },
    },
  },
}
export default theme
