import { NextSeo } from 'next-seo'
import { ContextProviders } from '@/context'
export var Layout = function (_a) {
  var title = _a.title,
    description = _a.description,
    error = _a.error,
    children = _a.children
  return (
    <ContextProviders>
      <NextSeo
        title={
          title !== null && title !== void 0 ? title : 'Fabien Diaz - Portfolio'
        }
        description={
          description !== null && description !== void 0
            ? description
            : 'Fabien Diaz - Portfolio'
        }
      />
      {children}
      {error && <div>{error}</div>}
    </ContextProviders>
  )
}
