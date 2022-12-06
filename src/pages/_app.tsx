import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { Layout, PageLoader, PageTransitioner } from '@/components'
import { useIsPageLoading } from '@/hooks/useIsPageLoading'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Layout>
        <PageLoader pageProps={pageProps} />
        <PageTransitioner />
        {!useIsPageLoading() && (
          <>
            <Component {...pageProps} />
          </>
        )}
      </Layout>
    </>
  )
}

export default MyApp
