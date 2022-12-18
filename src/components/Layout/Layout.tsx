import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import { ContextProviders } from '@/context'

export type LayoutProps = {
  children: ReactNode
  title?: string
  description?: string
  error?: string
}

export const Layout = ({
  title,
  description,
  error,
  children,
}: LayoutProps): JSX.Element => (
  <ContextProviders>
    <NextSeo
      title={title ?? 'Fabien Diaz - Portfolio'}
      description={description ?? 'Fabien Diaz - Portfolio'}
    />
    {children}
    {error && <div>{error}</div>}
  </ContextProviders>
)
