import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeContext as ThemeContextProvider } from './ThemeContext'
import theme from '@/styles/theme'
import { PageTransitionerProvider } from '@/context/PageTransitionerContext'

interface ContextProvidersProps {
  children: ReactNode
}

/**
 * ContextProviders wrapper component to abstract all providers into a single
 * provider that is used in the App component.
 *
 */
export const ContextProviders = ({
  children,
}: ContextProvidersProps): JSX.Element => {
  return (
    <HelmetProvider>
      <ThemeContextProvider theme={theme}>
        <PageTransitionerProvider>{children}</PageTransitionerProvider>
      </ThemeContextProvider>
    </HelmetProvider>
  )
}
