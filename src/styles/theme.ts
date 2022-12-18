import { createTheme } from '@mui/material'

export const defaultFont = 'Actor'
export const titleFont = 'Secular One'
export const headerFont = 'Rubik Mono One'

const theme = createTheme({
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
  pxToRem: (size) => `${size / 10}rem`,
  h1: {
    fontFamily: headerFont,
    fontSize: '4.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  h2: {
    fontFamily: titleFont,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  h3: {
    fontFamily: titleFont,
  },
  h4: {},
  h5: {},
  h6: {},
  body1: {
    fontFamily: defaultFont,
    fontWeight: 500,
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
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
      contained: {
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
        [theme.breakpoints.down('lg')]: {
          fontSize: '1.2rem',
          padding: '7px 20px',
        },
        ':hover': {
          backgroundColor: theme.palette.secondary.light,
        },
        '&.Mui-disabled': {
          background: theme.palette.secondary.main,
          color: theme.palette.grey[600],
        },
      },
      text: {
        border: '1px solid transparent',
        borderRadius: '50px',
        fontSize: '1.6rem',
        lineHeight: '2.2rem',
        padding: '14px  40px',
        fontWeight: 500,
        [theme.breakpoints.down('lg')]: {
          fontSize: '1.2rem',
          padding: '7px 20px',
        },
        ':hover': {
          border: '1px solid',
        },
      },
    },
    variants: [
      {
        props: { variant: 'text' },
        style: {
          ':disabled': {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
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
        background: `${theme.palette.secondary.light}`,
        color: `${theme.palette.common.white}`,
      },
    },
  },
}

export default theme
