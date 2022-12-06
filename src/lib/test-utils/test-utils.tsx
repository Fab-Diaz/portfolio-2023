import { ReactElement, ReactNode } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/styles/theme'

type providerWrapperProps = {
  children: ReactNode
}

const ProviderWrapper = ({ children }: providerWrapperProps): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: ProviderWrapper, ...options })

export * from '@testing-library/react'
export { customRender as render }
