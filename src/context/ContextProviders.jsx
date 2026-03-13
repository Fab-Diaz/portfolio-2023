import { HelmetProvider } from 'react-helmet-async'
import { ThemeContext as ThemeContextProvider } from './ThemeContext'
import theme from '@/styles/theme'
import { PageTransitionerProvider } from '@/context/PageTransitionerContext'
/**
 * ContextProviders wrapper component to abstract all providers into a single
 * provider that is used in the App component.
 *
 */
export var ContextProviders = function (_a) {
  var children = _a.children
  return (
    <HelmetProvider>
      <ThemeContextProvider theme={theme}>
        <PageTransitionerProvider>{children}</PageTransitionerProvider>
      </ThemeContextProvider>
    </HelmetProvider>
  )
}
